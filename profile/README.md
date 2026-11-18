<p align="center">
  <a href="https://paidmcp.dev">
    <img src="./assets/hero.svg" width="100%" alt="PaidMCP: MCP servers that get paid per call. Native MCP + x402. Free on testnet, stablecoins when you go live.">
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
  Open infrastructure for monetizable MCP servers.<br>
  Build native MCP + x402 servers that AI agents connect to directly,<br>
  with a free testnet onboarding path and pay-per-call stablecoin settlement.
</p>

<br>

<img src="./assets/label-how.svg" height="24" alt="How it works">

<p align="center">
  <img src="./assets/flow.svg" width="100%" alt="The agent calls a tool, the server quotes a price with HTTP 402, the client pays per call in stablecoins, and the result comes back.">
</p>

<br>

<img src="./assets/label-repos.svg" height="24" alt="Repositories">

<p align="center">
  <a href="https://github.com/paidmcp/template"><img src="./assets/repo-template.svg" width="61%" alt="paidmcp/template: forkable native MCP + x402 server template, free testnet first"></a>
  <a href="https://github.com/paidmcp/client"><img src="./assets/repo-client.svg" width="37.5%" alt="paidmcp/client: optional managed wallet proxy with spending caps and confirmations"></a>
  <a href="https://github.com/paidmcp/examples"><img src="./assets/repo-examples.svg" width="37.5%" alt="paidmcp/examples: flagship MCP server examples"></a>
  <a href="https://github.com/paidmcp/directory"><img src="./assets/repo-directory.svg" width="61%" alt="paidmcp/directory: source for paidmcp.dev"></a>
</p>

<br>

<img src="./assets/label-start.svg" height="24" alt="Quick start">

<p align="center">
  <img src="./assets/start-users.svg" width="49.25%" alt="Users: npx paidmcp-client init, npx paidmcp-client wallet, then connect with a snippet from paidmcp.dev">
  <img src="./assets/start-builders.svg" width="49.25%" alt="Builders: fork the template, npm run setup, edit src/tools.ts, deploy and submit to the directory">
</p>

<details>
<summary><b>Users</b>: copyable steps</summary>
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
<summary><b>Builders</b>: copyable steps</summary>
<br>

1. Fork [`template`](https://github.com/paidmcp/template).
2. Create a wallet and testnet-ready env defaults:

   ```bash
   npm run setup
   ```

3. Edit `src/tools.ts`, deploy, and submit your server to the [directory](https://paidmcp.dev) with pricing.

</details>

<br>

<p align="center">
  <a href="https://paidmcp.dev"><img src="./assets/logo.svg" width="44" alt="PaidMCP logo"></a>
</p>
<p align="center">
  <sub>
    <a href="https://paidmcp.dev">paidmcp.dev</a> ·
    Contributing, security and conduct notes live in each repository ·
    MIT licensed
  </sub>
</p>
