<p align="center">
  <a href="https://paidmcp.dev">
    <img src="./assets/hero.svg" width="100%" alt="PaidMCP: open infrastructure for monetizable MCP servers. Agents connect, pay per call, and settle in stablecoins.">
  </a>
</p>

<p align="center">
  <a href="https://paidmcp.dev"><img src="./assets/btn-directory.svg" height="40" alt="Browse the directory"></a>
  &nbsp;
  <a href="https://paidmcp.dev/connect"><img src="./assets/btn-connect.svg" height="40" alt="Connect guide"></a>
  &nbsp;
  <a href="https://github.com/paidmcp/template"><img src="./assets/btn-template.svg" height="40" alt="Fork the template"></a>
</p>

<p align="center">
  Build native MCP + x402 servers that AI agents connect to directly,<br>
  with a free testnet onboarding path and pay-per-call stablecoin settlement.
</p>

<img src="./assets/divider.svg" width="100%" height="8" alt="">

## How it works

<p align="center">
  <img src="./assets/flow.svg" width="100%" alt="The agent calls a tool, the server quotes a price with HTTP 402, the client pays per call in stablecoins, and the result comes back.">
</p>

Every paid call is a normal MCP tool call with a price attached. No accounts, no API keys to hand out, no invoices: the agent pays for what it uses, when it uses it.

## Repositories

<p align="center">
  <a href="https://github.com/paidmcp/template"><img src="./assets/repo-template.svg" width="49%" alt="paidmcp/template: forkable native MCP + x402 server template, free testnet first"></a>
  <a href="https://github.com/paidmcp/client"><img src="./assets/repo-client.svg" width="49%" alt="paidmcp/client: optional managed wallet proxy with spending caps and confirmations"></a>
</p>
<p align="center">
  <a href="https://github.com/paidmcp/examples"><img src="./assets/repo-examples.svg" width="49%" alt="paidmcp/examples: flagship MCP server examples"></a>
  <a href="https://github.com/paidmcp/directory"><img src="./assets/repo-directory.svg" width="49%" alt="paidmcp/directory: source for paidmcp.dev"></a>
</p>

## Quick start

<p align="center">
  <img src="./assets/term-users.svg" width="49%" alt="Users: npx paidmcp-client init, npx paidmcp-client wallet, then connect with a snippet from paidmcp.dev">
  <img src="./assets/term-builders.svg" width="49%" alt="Builders: fork the template, npm run setup, edit src/tools.ts, deploy and submit to the directory">
</p>

<details open>
<summary><b>For users</b>: connect an agent to paid MCP servers</summary>
<br>

**Managed wallet flow (recommended)**

```bash
npx paidmcp-client init
```

```bash
npx paidmcp-client wallet
```

Then connect using the snippets on [paidmcp.dev/connect](https://paidmcp.dev/connect).

**Native flow (no proxy)**

Point your MCP client directly at a server's `/mcp` endpoint.

Start on testnet first, then move to live stablecoins when you are ready.

</details>

<details>
<summary><b>For builders</b>: ship a server that gets paid</summary>
<br>

1. Fork [`template`](https://github.com/paidmcp/template).
2. Create a wallet and testnet-ready env defaults:

   ```bash
   npm run setup
   ```

3. Edit `src/tools.ts`, deploy, and submit your server to the [directory](https://paidmcp.dev) with pricing.

</details>

Full onboarding lives in the README of [`client`](https://github.com/paidmcp/client), [`template`](https://github.com/paidmcp/template), and [`examples`](https://github.com/paidmcp/examples).

## Community

| | |
| :-- | :-- |
| **Contributing** | See `CONTRIBUTING.md` in each repository |
| **Security** | Report through `SECURITY.md` in the affected repository |
| **Conduct** | See `CODE_OF_CONDUCT.md` in each repository |
| **License** | MIT in every repository |

<img src="./assets/divider.svg" width="100%" height="8" alt="">

<p align="center">
  <a href="https://paidmcp.dev"><img src="./assets/logo.svg" width="56" alt="PaidMCP logo"></a>
  <br>
  <sub><a href="https://paidmcp.dev">paidmcp.dev</a> · native MCP + x402 · pay-per-call · testnet first</sub>
</p>
