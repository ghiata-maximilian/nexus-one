/**
 * nexus-weather-api — x402-per-call weather data for machine customers.
 * Data source: Open-Meteo (free, no key). Sold per-call via x402 (USDC on Base).
 *
 * Endpoints:
 *   GET /health                        → free
 *   GET /v1/current?city=Paris         → 402-gated (or X-Payment in dry-run mode)
 *   GET /v1/forecast?city=Paris&days=3 → 402-gated
 */

export interface Env {
  PAY_TO: string;
  NETWORK: string;
  PRICE_CALL: string; // atomic units (6 dec): 10000 = 0.01 USDC
}

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
  });

const WMO: Record<number, string> = {
  0: "clear sky", 1: "mainly clear", 2: "partly cloudy", 3: "overcast",
  45: "fog", 48: "depositing rime fog", 51: "light drizzle", 53: "drizzle", 55: "dense drizzle",
  61: "light rain", 63: "rain", 65: "heavy rain", 71: "light snow", 73: "snow", 75: "heavy snow",
  80: "rain showers", 81: "heavy showers", 95: "thunderstorm", 96: "thunderstorm + hail", 99: "severe thunderstorm + hail",
};

async function geocode(city: string) {
  const g = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
  const gd = await g.json();
  const hit = gd.results?.[0];
  if (!hit) throw new Error(`city not found: ${city}`);
  return { lat: hit.latitude, lon: hit.longitude, resolved: `${hit.name}, ${hit.country_code ?? ""}`.replace(/, $/, "") };
}

function paymentRequired(env: Env, path: string, query: string) {
  return json({
    x402Version: 2,
    error: "Payment Required",
    accepts: [{
      scheme: "exact",
      network: "eip155:8453",
      maxAmountRequired: env.PRICE_CALL,
      payToAddress: env.PAY_TO,
      resource: `https://nexus-weather-api.visibility-audit-api.workers.dev${path}${query}`,
      description: "Weather data per call (machine-readable)",
      requiredDeadlineSeconds: 300,
    }],
  }, 402);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return json({ ok: true, service: "nexus-weather-api", x402: true, network: env.NETWORK, priceUsdc: Number(env.PRICE_CALL) / 1e6 });
    }

    if (url.pathname === "/v1/current" || url.pathname === "/v1/forecast") {
      const city = url.searchParams.get("city");
      if (!city) return json({ error: "Provide ?city=Paris" }, 400);

      const payment = request.headers.get("X-Payment");
      if (!payment) return paymentRequired(env, url.pathname, url.search || "");

      // TODO(verify): x402 facilitator settlement before enabling paid mode.
      try {
        const loc = await geocode(city);
        const isForecast = url.pathname === "/v1/forecast";
        const days = Math.min(Number(url.searchParams.get("days") || 3) || 3, 7);
        const params = new URLSearchParams({
          latitude: String(loc.lat), longitude: String(loc.lon),
          current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
          daily: isForecast ? "temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code" : "",
          timezone: "auto", forecast_days: String(isForecast ? days : 1),
        });
        const w = await (await fetch(`https://api.open-meteo.com/v1/forecast?${params}`)).json();
        const current = w.current ?? {};
        return json({
          mode: "dry-run-pending-facilitator",
          priceUsdc: Number(env.PRICE_CALL) / 1e6,
          payTo: env.PAY_TO,
          location: loc.resolved,
          current: {
            temperature_c: current.temperature_2m, feels_like_c: current.apparent_temperature,
            humidity_pct: current.relative_humidity_2m, wind_kmh: current.wind_speed_10m,
            condition: WMO[current.weather_code] ?? `code ${current.weather_code}`,
          },
          ...(isForecast ? { forecast: (w.daily?.time ?? []).map((t: string, i: number) => ({
            date: t, max_c: w.daily.temperature_2m_max[i], min_c: w.daily.temperature_2m_min[i],
            precip_mm: w.daily.precipitation_sum[i], condition: WMO[w.daily.weather_code[i]] ?? `code ${w.daily.weather_code[i]}`,
          })) } : {}),
          note: "Deployer: wire x402 facilitator verify() before enabling paid mode.",
        });
      } catch (e: any) {
        return json({ error: String(e.message ?? e) }, 404);
      }
    }

    return json({ error: "not found", endpoints: ["/health", "/v1/current?city=", "/v1/forecast?city=&days="] }, 404);
  },
};
