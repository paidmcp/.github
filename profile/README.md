# PaidMCP

Open infrastructure for monetizable MCP servers. Build MCPs that charge AI agents per call in USDC (Base) or USDT0 (Plasma), powered by [x402](https://x402.org) and [Tether WDK](https://docs.wdk.tether.io).

## Repositories

- [template](https://github.com/paidmcp/template) - forkable paid MCP template
- [client](https://github.com/paidmcp/client) - local proxy for Claude Desktop/Cursor
- [examples](https://github.com/paidmcp/examples) - flagship MCP examples
- [directory](https://github.com/paidmcp/directory) - source for paidmcp.dev

## Quick start

### Users

- Published flow: `npx paidmcp-client init`, `npx paidmcp-client wallet`, `npx paidmcp-client run <endpoint>`
- From source flow: clone `client/`, then run `npm install`, `npm run build`, `npm run init`

### Builders

- Fork `template`
- Run `npm run wallet:create` and store the seed in `.env` (`SEED_PHRASE`)
- Edit `src/tools.ts`, deploy, and submit to the directory

Full onboarding: use the README files in the `client`, `template`, and `examples` repositories above.

## Community

- Contributing guide: see each repository `CONTRIBUTING.md`
- Security reporting: see each repository `SECURITY.md`
- Conduct expectations: see each repository `CODE_OF_CONDUCT.md`
- License: MIT in each repository (`LICENSE`)
