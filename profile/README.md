# PaidMCP

Open infrastructure for monetizable MCP servers. Build native MCP + x402 servers that AI agents can connect to directly, with a free testnet onboarding path and pay-per-call stablecoin settlement.

- Directory: [paidmcp.dev](https://paidmcp.dev)
- Connect guide: [paidmcp.dev/connect](https://paidmcp.dev/connect)

## Repositories

- [template](https://github.com/paidmcp/template) - forkable native MCP + x402 template (free testnet first)
- [client](https://github.com/paidmcp/client) - optional managed wallet proxy (caps + confirmations)
- [examples](https://github.com/paidmcp/examples) - flagship MCP examples
- [directory](https://github.com/paidmcp/directory) - source for paidmcp.dev

## Quick start

### Users

- Managed wallet flow (recommended): `npx paidmcp-client init`, `npx paidmcp-client wallet`, then connect via snippets from paidmcp.dev
- Native flow (no proxy): connect directly to an MCP endpoint `/mcp` from your MCP client
- Start on testnet first, then move to live stablecoins when you are ready

### Builders

- Fork `template`
- Run `npm run setup` (creates wallet + testnet-ready env defaults)
- Edit `src/tools.ts`, deploy, and submit to the directory with pricing

Full onboarding: use the README files in the `client`, `template`, and `examples` repositories above.

## Community

- Contributing guide: see each repository `CONTRIBUTING.md`
- Security reporting: see each repository `SECURITY.md`
- Conduct expectations: see each repository `CODE_OF_CONDUCT.md`
- License: MIT in each repository (`LICENSE`)
