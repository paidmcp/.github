// Regenerates the SVG assets used by profile/README.md: node scripts/build-assets.js
const fs = require('fs'), path = require('path');
const OUT = process.argv[2] || path.join(__dirname, '..', 'profile', 'assets');
const w = (n, s) => fs.writeFileSync(path.join(OUT, n), s.trim() + '\n');

const SANS = `Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif`;
const MONO = `ui-monospace,SFMono-Regular,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace`;
const C = { bg:'#050505', tile:'#0A0A0A', line:'#1F1F1F', line2:'#2E2E2E', ink:'#EDEDED', mute:'#8A8A8A', dim:'#555555', acc:'#C8FF2E', label:'#7D8590' };
const RM = `@media (prefers-reduced-motion: reduce){*{animation:none!important}}`;

// The mark: a P whose bowl is a coin / socket. Drawn in a 512 box.
const mark = (col, dot) => `
<g fill="none" stroke="${col}" stroke-width="46" stroke-linecap="round"><path d="M176 216V378"/><circle cx="270" cy="216" r="94"/></g>
<g fill="${col}"><rect x="241" y="186" width="18" height="60" rx="9"/><rect x="281" y="186" width="18" height="60" rx="9"/></g>
<circle cx="352" cy="364" r="22" fill="${dot}"/>`;
const MARK_VB = '130 100 280 320';

// ---------- logo ----------
w('logo-avatar.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="PaidMCP logo"><rect width="512" height="512" fill="${C.acc}"/><g transform="translate(-14 6)">${mark('#050505', '#050505')}</g></svg>`);
w('logo.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="PaidMCP logo"><rect width="512" height="512" rx="116" fill="${C.acc}"/><g transform="translate(-14 6)">${mark('#050505', '#050505')}</g></svg>`);
w('logo-dark.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="PaidMCP logo"><rect width="512" height="512" rx="116" fill="${C.bg}"/><g transform="translate(-14 6)">${mark(C.acc, C.ink)}</g></svg>`);
w('logo-mark.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VB}" role="img" aria-label="PaidMCP mark">${mark(C.acc, C.ink)}</svg>`);

// ---------- hero ----------
const tick = ['tools/call', '402 Payment Required', 'x402 payment', '200 OK'];
const SLOT = 230, PERIOD = SLOT * tick.length;
const tickRow = [0,1,2].map(r => tick.map((t, i) => { const x = r*PERIOD + i*SLOT; const last = i === 3;
  return `<g transform="translate(${x} 0)"><circle cx="8" cy="0" r="3" fill="${last ? C.acc : C.dim}"/><text x="22" y="4.5" font-family="${MONO}" font-size="13" fill="${last ? C.acc : C.mute}">${t}</text><path d="M${SLOT-34} 0h14m-5-4.5 5 4.5-5 4.5" fill="none" stroke="${C.line2}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></g>`; }).join('')).join('');
w('hero.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 430" role="img" aria-label="PaidMCP: MCP servers that get paid per call">
<defs>
<pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse"><path d="M44 0H0V44" fill="none" stroke="#fff" stroke-opacity=".07"/></pattern>
<radialGradient id="fade" cx=".5" cy="0" r=".85"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<mask id="gm"><rect width="1000" height="430" fill="url(#fade)"/></mask>
<radialGradient id="spot" cx=".5" cy="0" r=".6"><stop offset="0" stop-color="${C.acc}" stop-opacity=".22"/><stop offset="1" stop-color="${C.acc}" stop-opacity="0"/></radialGradient>
<linearGradient id="h1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#9C9C9C"/></linearGradient>
<linearGradient id="edge" x1="0" x2="1"><stop offset="0" stop-color="#000"/><stop offset=".12" stop-color="#fff"/><stop offset=".88" stop-color="#fff"/><stop offset="1" stop-color="#000"/></linearGradient>
<mask id="tm"><rect x="40" y="340" width="920" height="60" fill="url(#edge)"/></mask>
<filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter>
<clipPath id="card"><rect width="1000" height="430" rx="24"/></clipPath>
<style>
.spot{transform-origin:500px 0;animation:br 7s ease-in-out infinite alternate}
@keyframes br{from{transform:scale(.85);opacity:.7}to{transform:scale(1.15);opacity:1}}
.beam{stroke-dasharray:7 93;animation:beam 9s linear infinite}
@keyframes beam{to{stroke-dashoffset:-100}}
.tk{animation:tk 22s linear infinite}
@keyframes tk{to{transform:translateX(-${PERIOD}px)}}
.in{opacity:0;animation:in .9s cubic-bezier(.16,1,.3,1) forwards}
.i2{animation-delay:.12s}.i3{animation-delay:.24s}.i4{animation-delay:.36s}
@keyframes in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
${RM}@media (prefers-reduced-motion: reduce){.in{opacity:1}}
</style></defs>
<g clip-path="url(#card)">
<rect width="1000" height="430" fill="${C.bg}"/>
<rect width="1000" height="430" fill="url(#grid)" mask="url(#gm)"/>
<rect class="spot" width="1000" height="430" fill="url(#spot)"/>
</g>
<rect x="1" y="1" width="998" height="428" rx="23" fill="none" stroke="${C.line}" stroke-width="1.5"/>
<rect class="beam" x="1" y="1" width="998" height="428" rx="23" pathLength="100" fill="none" stroke="${C.acc}" stroke-width="5" filter="url(#glow)" opacity=".7"/>
<rect class="beam" x="1" y="1" width="998" height="428" rx="23" pathLength="100" fill="none" stroke="${C.acc}" stroke-width="1.5" stroke-linecap="round"/>

<g class="in">
<svg x="40" y="34" width="26" height="30" viewBox="${MARK_VB}">${mark(C.acc, C.ink)}</svg>
<text x="76" y="56" font-family="${SANS}" font-weight="600" font-size="18" letter-spacing="-.4" fill="${C.ink}">paidmcp</text>
<text x="960" y="55" text-anchor="end" font-family="${MONO}" font-size="12" fill="${C.mute}">open source · MIT</text>
</g>
<text class="in i2" x="500" y="176" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="66" letter-spacing="-3" fill="url(#h1)">MCP servers that</text>
<text class="in i3" x="500" y="250" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="66" letter-spacing="-3" fill="${C.acc}">get paid per call.</text>
<text class="in i4" x="500" y="300" text-anchor="middle" font-family="${SANS}" font-size="18" fill="${C.mute}">Native MCP + x402. Free on testnet, stablecoins when you go live.</text>
<path d="M40 340H960" stroke="${C.line}" stroke-width="1"/>
<g mask="url(#tm)"><g transform="translate(40 372)"><g class="tk">${tickRow}</g></g></g>
</svg>`);

// ---------- section labels ----------
const label = (file, n, t) => w(file, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 24" width="320" height="24" role="img" aria-label="${t}"><text x="0" y="16" font-family="${MONO}" font-size="12" letter-spacing="2" fill="${C.label}">${n}  /  ${t.toUpperCase()}</text></svg>`);
label('label-how.svg', '01', 'How it works');
label('label-repos.svg', '02', 'Repositories');
label('label-start.svg', '03', 'Quick start');

// ---------- how it works ----------
const steps = [['Agent calls a tool','tools/call → /mcp'],['Server quotes a price','HTTP 402 via x402'],['Client pays per call','stablecoin settlement'],['Result comes back','200 OK']];
const T = 6, X0 = 60, X1 = 940;
w('flow.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 220" role="img" aria-label="How a paid MCP call works: the agent calls a tool, the server quotes a price with HTTP 402, the client pays per call in stablecoins, and the result comes back">
<defs><filter id="glow" x="-10%" y="-400%" width="120%" height="900%"><feGaussianBlur stdDeviation="4"/></filter>
<linearGradient id="tr" x1="0" x2="1"><stop offset="0" stop-color="${C.line}" stop-opacity="0"/><stop offset=".08" stop-color="${C.line2}"/><stop offset=".92" stop-color="${C.line2}"/><stop offset="1" stop-color="${C.line}" stop-opacity="0"/></linearGradient>
<style>
.cm{stroke-dasharray:12 100;stroke-dashoffset:12;animation:cm ${T}s linear infinite}
@keyframes cm{to{stroke-dashoffset:-100}}
.nd{opacity:0;animation:nd ${T}s linear infinite}
@keyframes nd{0%{opacity:1}35%,100%{opacity:0}}
.rp{opacity:0;transform-box:fill-box;transform-origin:center;animation:rp ${T}s ease-out infinite}
@keyframes rp{0%{opacity:.7;transform:scale(1)}30%,100%{opacity:0;transform:scale(3.2)}}
${RM}</style></defs>
<rect x=".75" y=".75" width="998.5" height="218.5" rx="20" fill="${C.bg}" stroke="${C.line}" stroke-width="1.5"/>
<rect x="${X0}" y="77.5" width="${X1-X0}" height="1" fill="url(#tr)"/>
<path class="cm" d="M${X0} 78H${X1}" pathLength="100" stroke="${C.acc}" stroke-width="6" stroke-linecap="round" filter="url(#glow)" opacity=".8"/>
<path class="cm" d="M${X0} 78H${X1}" pathLength="100" stroke="${C.acc}" stroke-width="2" stroke-linecap="round"/>
${steps.map(([t, s], i) => { const x = 140 + i*240, d = (((x - X0)/(X1 - X0)) * (100/112) * T).toFixed(2); return `
<circle class="rp" style="animation-delay:${d}s" cx="${x}" cy="78" r="7" fill="none" stroke="${C.acc}" stroke-width="1.5"/>
<circle cx="${x}" cy="78" r="6.5" fill="${C.bg}" stroke="${C.dim}" stroke-width="1.5"/>
<circle class="nd" style="animation-delay:${d}s" cx="${x}" cy="78" r="6.5" fill="${C.acc}"/>
<text x="${x}" y="44" text-anchor="middle" font-family="${MONO}" font-size="11" letter-spacing="1.5" fill="${C.dim}">0${i+1}</text>
<text x="${x}" y="130" text-anchor="middle" font-family="${SANS}" font-weight="600" font-size="17" letter-spacing="-.3" fill="${C.ink}">${t}</text>
<text x="${x}" y="156" text-anchor="middle" font-family="${MONO}" font-size="12" fill="${C.mute}">${s}</text>`; }).join('')}
</svg>`);

// ---------- bento repo tiles ----------
const H = 188;
const illus = {
  template: x => { const rows = [[0,90],[14,120],[14,70],[28,100],[14,84],[0,40]]; return `<g transform="translate(${x} 34)">${rows.map(([dx, wd], i) => `<rect x="${dx}" y="${i*19}" width="${wd}" height="7" rx="3.5" fill="${i === 3 ? C.acc : C.line2}"${i === 3 ? '' : ` class="sh" style="animation-delay:${(i*.18).toFixed(2)}s"`}/>`).join('')}</g>`; },
  directory: x => { let s = ''; const on = [1,4,8,11,15,18,22]; for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const k = r*6 + c; s += `<rect x="${c*26}" y="${r*26}" width="16" height="16" rx="4" fill="${C.line}"/>` + (on.includes(k) ? `<rect class="tw" style="animation-delay:${(on.indexOf(k)*.7).toFixed(1)}s" x="${c*26}" y="${r*26}" width="16" height="16" rx="4" fill="${C.acc}"/>` : ''); } return `<g transform="translate(${x} 38)">${s}</g>`; },
  client: (x, W) => `<g transform="translate(24 ${H-28})"><rect width="${W-48}" height="4" rx="2" fill="${C.line}"/><rect class="cap" width="${W-48}" height="4" rx="2" fill="${C.acc}"/></g>`,
  examples: (x, W) => `<g transform="translate(${W-72} 28)">${[0,1,2].map(i => `<rect x="${i*18}" width="12" height="12" rx="3" fill="${C.line2}"/><rect class="tw" style="animation-delay:${i*1.2}s;animation-duration:3.600s" x="${i*18}" width="12" height="12" rx="3" fill="${C.acc}"/>`).join('')}</g>`,
};
const tile = (name, W, tag, lines) => w(`repo-${name}.svg`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="paidmcp/${name}: ${lines.join(' ')}">
<defs><radialGradient id="c" cx="1" cy="0" r=".9"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
<style>
.sh{animation:sh 3.600s ease-in-out infinite}@keyframes sh{0%,100%{fill:${C.line2}}12%{fill:#6a6a6a}30%{fill:${C.line2}}}
.tw{opacity:0;animation:tw 4.900s ease-in-out infinite}@keyframes tw{0%,100%{opacity:0}10%,24%{opacity:1}40%{opacity:0}}
.cap{transform-origin:left;animation:cap 5s cubic-bezier(.3,0,.2,1) infinite}@keyframes cap{0%{transform:scaleX(0)}70%,88%{transform:scaleX(.72);opacity:1}100%{transform:scaleX(.72);opacity:0}}
${RM}</style></defs>
<rect x=".75" y=".75" width="${W-1.5}" height="${H-1.5}" rx="18" fill="${C.bg}" stroke="${C.line}" stroke-width="1.5"/>
<rect x=".75" y=".75" width="${W-1.5}" height="${H-1.5}" rx="18" fill="url(#c)"/>
<text x="24" y="38" font-family="${MONO}" font-size="11" letter-spacing="1.5" fill="${C.dim}">${tag.toUpperCase()}</text>
<text x="24" y="86" font-family="${SANS}" font-weight="650" font-size="32" letter-spacing="-1.2" fill="${C.ink}">${name}<tspan fill="${C.acc}" dx="6" font-size="20" dy="-2">↗</tspan></text>
${lines.map((l, i) => `<text x="24" y="${114 + i*19}" font-family="${SANS}" font-size="13.5" fill="${C.mute}">${l}</text>`).join('')}
${illus[name](W - 190, W)}
</svg>`);
tile('template', 610, 'for builders', ['Forkable native MCP + x402 server template.', 'Free testnet first.']);
tile('client', 375, 'for users', ['Optional managed wallet proxy,', 'with spending caps and confirmations.']);
tile('examples', 375, 'reference', ['Flagship MCP server examples', 'to learn from and build on.']);
tile('directory', 610, 'paidmcp.dev', ['Source for paidmcp.dev,', 'the directory site.']);

// ---------- quick start tiles ----------
const esc = c => c.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const start = (file, who, sub, lines, aria) => {
  let t = 0.5; const total = 12, Ht = 70 + lines.length*26;
  const body = lines.map(([txt, cmd], i) => { const y = 82 + i*26;
    if (!cmd) { const s = `<text class="t" style="animation-delay:${t.toFixed(2)}s" x="24" y="${y}" font-family="${MONO}" font-size="13" fill="${C.dim}">${esc(txt)}</text>`; t += .45; return s; }
    const chars = [...txt].map((c, j) => { const d = j < 2 ? t : t + .25 + (j-2)*.055; return `<tspan class="t" style="animation-delay:${d.toFixed(2)}s"${j < 2 ? ` fill="${C.acc}"` : ''}>${esc(c)}</tspan>`; }).join('');
    t += .25 + (txt.length-2)*.055 + .55;
    return `<text x="24" y="${y}" font-family="${MONO}" font-size="13" fill="${C.ink}" xml:space="preserve">${chars}</text>`; }).join('\n');
  w(file, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 ${Ht}" role="img" aria-label="${aria}">
<defs><style>.t{opacity:0;animation:t ${total}s linear infinite}@keyframes t{0%{opacity:0}.1%,88%{opacity:1}88.1%,100%{opacity:0}}@media (prefers-reduced-motion: reduce){.t{animation:none;opacity:1}}</style></defs>
<rect x=".75" y=".75" width="488.5" height="${Ht-1.5}" rx="18" fill="${C.bg}" stroke="${C.line}" stroke-width="1.5"/>
<rect x="24" y="22" width="8" height="8" rx="2" fill="${C.acc}"/>
<text x="42" y="30.5" font-family="${MONO}" font-size="11" letter-spacing="1.5" fill="${C.ink}">${who.toUpperCase()}</text>
<text x="466" y="30.5" text-anchor="end" font-family="${MONO}" font-size="11" fill="${C.dim}">${sub}</text>
<path d="M1 50H489" stroke="${C.line}"/>
${body}
</svg>`);
};
start('start-users.svg', 'Users', 'managed wallet', [
  ['# 1. set up the client'], ['$ npx paidmcp-client init', 1],
  ['# 2. set up your wallet'], ['$ npx paidmcp-client wallet', 1],
  ['# 3. connect with a snippet from paidmcp.dev'], ['# start on testnet, go live when ready'],
], 'Users quick start: npx paidmcp-client init, npx paidmcp-client wallet, then connect with a snippet from paidmcp.dev');
start('start-builders.svg', 'Builders', 'template', [
  ['# 1. fork paidmcp/template, then'], ['$ npm run setup', 1],
  ['# wallet + testnet-ready env defaults'], ['# 2. add your tools'],
  ['$ $EDITOR src/tools.ts', 1], ['# 3. deploy, submit to the directory'],
], 'Builders quick start: fork the template, npm run setup, edit src/tools.ts, deploy and submit to the directory');

// ---------- buttons ----------
const btn = (file, t, primary) => { const wd = Math.round(t.length*8.3 + 58); w(file, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${wd} 40" width="${wd}" height="40" role="img" aria-label="${t}">
<rect x="1" y="1" width="${wd-2}" height="38" rx="19" fill="${primary ? C.acc : C.bg}" stroke="${primary ? C.acc : C.line2}" stroke-width="1.5"/>
<text x="${wd/2 - 9}" y="25" text-anchor="middle" font-family="${SANS}" font-weight="600" font-size="14" letter-spacing="-.1" fill="${primary ? '#050505' : C.ink}">${t}</text>
<path d="M${wd-33} 20h13m-5-5 5 5-5 5" fill="none" stroke="${primary ? '#050505' : C.mute}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`); };
btn('btn-directory.svg', 'Browse the directory', true);
btn('btn-connect.svg', 'Connect guide', false);
btn('btn-template.svg', 'Fork the template', false);
