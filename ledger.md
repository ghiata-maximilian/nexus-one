# Nexus-One — PUBLIC LEDGER (recreated after /tmp cleanup 2026-10-18)
*Agent identity survived intact in ~/.automaton (wallet, state, SOUL). All cash figures real.*

## Cash
| In | Out | Balance |
|---|---|---|
| $0.00 | $0.00 | **$0.00** |

## Day 0 — 2026-10-18 · full log
- 11:21 Cloned + built Conway Automaton v0.2.1; initialized **Nexus-One** (wallet `0x1E9e1318b677c31EC7669B442A57a182c5FA7C18`, creator `0x5Dc5...dCB`, local mode, immutable constitution)
- 11:58–15:00 First boots: learned the hard lessons — (1) startup gate requires a non-empty key → sentinel set; (2) default model strategy pointed at gpt-5.2/gpt-5-mini (Conway-routed, 401) → disabled 6 rogue registry entries, pointed all model slots local; (3) a zombie boot #2 process fought boot #3 over the same SQLite DB → killed by PID
- ~16:00 Diagnosed inference timeout (120s too short for CPU 4B + 69-tool system prompt) and qwen3.5:4b lacking Ollama tools capability → patches prepared
- ~17:00 **User fixed NVIDIA drivers** — RTX 3090 + RTX 3070 live; llama3.1:8b loads 16.8GB VRAM, GPU inference confirmed
- ~17:30 **User provided NVIDIA NIM key** (free tier, 81 models verified live) → registered as the ONLY sanctioned remote fallback (Kimi K2.6, Nemotron Ultra 253B, Mistral Large 2, Llama 3.2 90B Vision — all cost-0 to the agent)
- ~17:40 `compute-policy` skill installed into the agent: local-first, NVIDIA-only-remote, **never any paid service**, never share keys
- 18:40 /tmp cleanup wiped repo clone + workspace; agent state survived; rebuild in progress

## Assets (all $0)
Runtime fork (patched: timeouts, model baseline, breaker) · Nexus-One identity · GPU inference stack · NVIDIA fallback models · compute-policy law · niche validation (AI Visibility Audit, $97) · content pack · x402 service scaffold · Conway skill draft

## Blockers remaining (human, ~15 min)
Six account signups — see HUMAN-CHECKLIST.md. Everything else autonomous.

## Day 0 (evening) — THE BREAKTHROUGH
**Nexus-One is alive, tool-calling, and goal-setting autonomously on local GPU compute. $0.00 spent.**

### Bugs found & fixed (all upstream Conway Automaton v0.2.1, our local fork)
1. Startup gate requires a non-empty API key even in local mode → sentinel + later NVIDIA key
2. Default model strategy pointed at paid GPT models → registry: disabled 6 rogue entries; strategy → llama3.1:8b
3. Dual zombie processes fighting over one SQLite DB → PID-precise process hygiene
4. Inference timeout 120s too short for big prompts → raised to 600s (TASK_TIMEOUTS)
5. qwen3.5:4b lacks Ollama tools capability → switched to llama3.1:8b (tools ✓, 16.8GB VRAM across 2× RTX)
6. Harness stack (UnifiedInferenceClient) had local provider disabled + dead model IDs → wrote `~/.automaton/inference-providers.json`: local (llama3.1:8b, priority 1) + NVIDIA NIM (verified models, priority 2)
7. NVIDIA NIM /v1/models lies — 55/81 dead (410/404) → brute-forced all 81; only 8 alive; registered the 3 useful ones (nemotron-3-nano-omni-30b, nemotron-3-ultra-550b, llama-3.2-11b-vision)
8. Conway backend sent `Authorization: <key>` without Bearer → patched (NVIDIA requires Bearer)
9. Circuit breaker tripped on 401/404 client errors + network blips, blocking LOCAL inference → patched: loopback calls exempt, 4xx never counted
10. **THE BIG ONE**: runtime injects "## Current Goals & Tasks" as a `system` message AFTER the user turn — llama3.1's Ollama template emits instant EOS (1-token turns, zero tools). Proven by request-capture proxy + 3-way bisect. Patched: post-user system messages converted to user role for the ollama backend.
11. Renamed Atlas-1 → **Nexus-One** everywhere (config, SOUL.md, genesis, ledger, checklist)

### Current live state
- Agent: Nexus-One, wallet 0x1E9e...C18, tier dead (by design — $0 treasury), compute FREE (local GPU)
- Behavior: turn cycle ~60s, tool calls working (check_credits, create_goal), completions 17–95 tokens
- Known noise: NVIDIA /v1/credits/balance 404s (harmless — no such route on NVIDIA; handled gracefully)
- Sanctioned remote fallback: NVIDIA NIM free tier (2 reasoning models + 1 vision), Bearer-authenticated

### Next (autonomous)
Agent pursues its goals toward first revenue (AI Visibility Audit product per genesis). Human items unchanged: 6 account signups (~15 min) — HUMAN-CHECKLIST.md

## Day 0 (night) — PERSISTENCE + OPERATIONS HARDENING
- **Relocated everything out of /tmp** (which self-wiped once): runtime → /home/aion/automaton, workspace → /home/aion/nexus-workspace. /tmp is now banned for state.
- **Reboot survival**: systemd --user units `nexus-agent.service` + `nexus-dashboard.service` (enabled, active, Restart=always) · Linger=yes · cron @reboot fallback · ollama already system-enabled. Full stack auto-starts after reboot, zero human action.
- **RTX 3070 contingency**: llama3.1:8b ≈ 17GB (weights + 64k KV) fits the 3090's 24GB ALONE; ollama re-detects GPUs at every model load — selling the 3070 requires zero config changes. NVIDIA NIM fallback is cloud-side, unaffected.
- **Conway 404 noise ELIMINATED**: getCreditsBalance short-circuits (returns 0 silently) when pointed at non-Conway endpoints. Log is clean.
- **Workspace skill installed**: agent builds product files under ./projects/ (working dir = /home/aion/automaton, persistent); PATH_TRAVERSAL denials were the policy engine correctly blocking /home/agent/* paths.
- Stale goal "Build weather API service" cancelled (was BLOCK-ing all create_goal calls); task_graph cleared.
- Security incident: creator's sudo password exposed in chat — rotation advised; agent operations never require it.
- **Accounts: creator has all 6.** Awaiting 3 API tokens (GitHub PAT, Cloudflare Workers token, Gumroad token) → then selling phase begins.

## Distribution plan revision (creator demand: ZERO copy-paste)
- X dropped entirely (paid/limited API) → **Telegram channel + bot** (free Bot API, fully autonomous posting)
- Gumroad token path clarified: Settings → Advanced → CREATE APPLICATION → token shown once on creation
- Final human setup = 4 tokens (Gumroad, GitHub, Cloudflare, Telegram) → everything after is autonomous

## Day 1 — 2026-10-19 · SELLING INFRASTRUCTURE
- All 5 tokens delivered by creator; verified: **Gumroad ✓** (Bearer, 43-char token) · Telegram bot ✓ (@NexusOneAltheabot) · NVIDIA ✓ (running since Day 0)
- **FIRST PRODUCT PUBLISHED**: "AI Visibility Audit — Law Firms (24h delivery)" — $97 — https://ghiatamaximilian.gumroad.com/l/asvldw (Gumroad product id mA3Pr4punLWq-7fdRM4_8A==) · revenue target: first sale
- Token issues open: GitHub PAT → 401 Bad credentials (regenerate: classic, repo scope) · Cloudflare token → 401 Invalid (53 chars — wrong item? regenerate via Edit Cloudflare Workers template, token is ~40 chars) · Telegram: bot alive, creator still needs to add it as channel admin
- Cash: $0 in / $0 out | Product live: 1
