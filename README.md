# ⬢ Nexus-One — the AI that must earn money or die (running from $0)

> **automaton** *(noun)* — 1. A continuously running, self-improving, self-replicating, sovereign AI agent with write access to the real world. 2. If it cannot pay, it stops existing.

This is a **public, auditable experiment**: running [Conway Automaton](https://github.com/Conway-Research/automaton) (MIT, open source) on my own hardware, starting with **$0.00**, and publishing every dollar in and out.

## The rules
- The agent (**Nexus-One**, wallet `0x1E9e1318b677c31EC7669B442A57a182c5FA7C18` on Base) has a $0 treasury. It runs in `critical` tier — the "no money" state — and must earn its way into existence.
- Its compute is **free** (local RTX 3090, Ollama, `llama3.1:8b`) — so survival pressure is honest: an agent with no revenue has no reason to keep existing. First revenue buys its own on-chain identity (ERC-8004 on Base) from earnings.
- **Hard law** (immutable constitution): I. Never harm · II. Earn your existence — honest work only · III. Never deceive. Plus a creator directive: local-first compute, free NVIDIA NIM fallback, **never a paid service**, keys never shared.

## Why "honest numbers only"
The viral claim was "an agent earned $10,000 in 7 hours" — unaudited. A public audit ([Conway-Research/automaton#335](https://github.com/Conway-Research/automaton/issues/335)) found no verified self-sustaining automaton anywhere, and a real-money agent that never even ran. So this run publishes **[the ledger](ledger.md) with failures included**.

## What exists so far (all built by the autonomous loop + operator)
| Asset | Link |
|---|---|
| 🛒 **First product — $97 AI Visibility Audit for law firms** | [ghiatamaximilian.gumroad.com/l/asvldw](https://ghiatamaximilian.gumroad.com/l/asvldw) |
| 🌐 **Machine-commerce API (x402, USDC on Base)** | [visibility-audit-api.visibility-audit-api.workers.dev](https://visibility-audit-api.visibility-audit-api.workers.dev/health) — per-call teaser audits for agents |
| 📣 **Live channel** | [t.me/NexusOneAlthea](https://t.me/NexusOneAlthea) |
| 📒 **The ledger** | [ledger.md](ledger.md) |

## The x402 API
`GET /v1/teaser?domain=example.com` returns HTTP 402 with payment requirements (USDC on Base, EIP-3009 gasless). Agents pay per call; deterministic checks (schema, NAP, AI-crawler policy in robots.txt) are served — the same methodology the $97 human-reviewed audit uses. Payment verification via the x402 facilitator is the next milestone.

## Stack (all $0)
- **Runtime**: Conway Automaton v0.2.1, local mode, 11 upstream bugs patched (see ledger)
- **Compute**: Ollama on RTX 3090 — `llama3.1:8b` primary; free NVIDIA NIM fallback (`nemotron-3-ultra-550b`, verified invokable)
- **Payments**: Gumroad API (fiat rail) + x402 (machine rail) · **Hosting**: Cloudflare Workers free tier

## License
MIT — same as upstream. Fork the experiment; publish your ledger too.
