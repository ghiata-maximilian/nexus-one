# NICHE DECISION — AI Visibility Audit (validated)
*Decision date: 2026-10-18 · Decision-maker: human (demand is human judgment) · Evidence compiled autonomously by Nexus-One's operator*

## Why this niche won

| Criterion | AI Visibility Audit | Dev CLI + Gumroad tier | Prompt/template pack |
|---|---|---|---|
| Willingness to pay (evidence) | **$97–$497 per audit; $797–$2,497/mo retainers** | $9–29 one-off | $12–39 one-off |
| Solo-operator proof | Vizibly AI (1 person, NY) est. revenue **~$384k** (Tracxn) | Anecdotal $100–1k/mo | Commodity, race to zero |
| Agent can produce 90%+ | Yes (audit = prompt battery + site crawl + report) | Yes | Yes |
| Demand trend 2026 | Rising (AI Overviews + assistants replacing search) | Flat | Flat |
| Fits "honest value" test | Yes — measurable claims | Yes | Weak |

## Evidence (fetched 2026-10-18)
1. **GeoViz** (geoviz.ai): sells exactly this to local businesses — "$97 AI Visibility Audit," cross-model analysis (ChatGPT/Claude/Gemini/Perplexity), ~6-page PDF, human-reviewed, same-day; upsell "Foundation Fix" **$497**.
2. **AI Search Engineers** (AccessWire, Jun 2026): identifies **legal, medical, financial** as highest-gap verticals; documents law firms with "strong Google rankings alongside complete AI search invisibility."
3. **Brandify**: AEO/GEO retainers **$797 / $1,297 / $2,497 per month** — the audit is the entry product.
4. **Vizibly AI**: single-person company, AI visibility monitoring for local businesses, est. revenue ~$384,292 (Tracxn profile).
5. **InterCore**: 100+ law firms served; GEO cited as "the most consequential shift in legal marketing since Google Search"; 34% of US adults regularly use ChatGPT (Pew 2025).
6. **Automaton Agency teardown** (Jul 2026): an agent attempted this exact product ($149–349 for estate/elder law) — made $0, *but* the post-mortem blamed strategy/demand-creation failures, not the product category. Lessons inherited: niche-picked prompts, human review step, distribution-first.

## Product spec v1 — "AI Visibility Audit for Law Firms" ($97)
**Promise:** "Find out in 24 hours whether AI assistants recommend your firm — and exactly how to fix it."

**Pipeline:**
1. **Input:** firm name + domain + city/practice area (intake form).
2. **Prompt battery:** ~20 buyer-intent queries ("who's the best [practice] lawyer in [city]"...) run across available engines: local Ollama baseline + free-tier remote models → disclosed per-engine results.
3. **Site checks (deterministic):** LocalBusiness/LegalService schema present? NAP consistent? robots.txt AI-crawler policy (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)? sitemap? FAQ/entity structure?
4. **Score:** 0–100 AI Visibility Score + per-engine breakdown + top-5 gaps + prioritized fix plan.
5. **Report:** markdown → branded PDF (~6 pages), *human-reviewed before delivery*.
6. **Delivery:** email + free "teaser score" lead magnet for the funnel.

**Anti-vaporware rule:** every claim in the report links to raw evidence (actual model answers, actual crawl findings). Refund if we can't start within 48h.

## Pricing ladder
| Tier | Price | What |
|---|---|---|
| Teaser | Free / $0.01 API | 1-domain machine check (this repo's x402 service) |
| Audit | **$97** | Full report (Gumroad) |
| Fix | **$497** | Implement top fixes + re-audit |
| Monitor | $49/mo later | Monthly re-check (powered by the x402 API) |
