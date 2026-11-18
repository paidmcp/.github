// Regenerates the SVG assets used by profile/README.md: node scripts/build-assets.js
const fs = require('fs'), path = require('path');
const OUT = process.argv[2] || path.join(__dirname, "..", "profile", "assets");
const w = (n, s) => fs.writeFileSync(path.join(OUT, n), s.trim() + '\n');

const SANS = `-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif`;
const MONO = `ui-monospace,SFMono-Regular,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace`;
const C = { bg0:'#070A0F', bg1:'#0D1520', line:'#1E2A3A', ink:'#F2F6FA', mute:'#8FA1B5', dim:'#55667A', mint:'#3DFFA8', cyan:'#22D3EE', amber:'#FFB547' };
const RM = `@media (prefers-reduced-motion: reduce){*{animation:none!important}}`;
const grad = (id='g') => `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.mint}"/><stop offset="1" stop-color="${C.cyan}"/></linearGradient>`;
const bgGrad = `<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${C.bg1}"/><stop offset="1" stop-color="${C.bg0}"/></linearGradient>`;

// The mark, drawn in a 512 box: P monogram whose bowl is a coin / socket.
const markGrad = `<linearGradient id="gm" gradientUnits="userSpaceOnUse" x1="160" y1="120" x2="370" y2="380"><stop offset="0" stop-color="${C.mint}"/><stop offset="1" stop-color="${C.cyan}"/></linearGradient>`;
const mark = (stroke='url(#gm)') => `
<g fill="none" stroke="${stroke}" stroke-width="46" stroke-linecap="round">
  <path d="M176 216V378"/>
  <circle cx="270" cy="216" r="94"/>
</g>
<g fill="${stroke}">
  <rect x="241" y="186" width="18" height="60" rx="9"/>
  <rect x="281" y="186" width="18" height="60" rx="9"/>
</g>`;

// ---------- logo ----------
const logo = (animated) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="PaidMCP logo">
<defs>${markGrad}${bgGrad}
<radialGradient id="glow" cx="0.55" cy="0.4" r="0.6"><stop offset="0" stop-color="${C.mint}" stop-opacity=".22"/><stop offset="1" stop-color="${C.mint}" stop-opacity="0"/></radialGradient>
${animated ? `<style>
.ring{transform-origin:270px 216px;animation:p 3.2s ease-out infinite}
.ring2{animation-delay:1.6s}
.dot{animation:b 3.2s ease-in-out infinite}
@keyframes p{0%{transform:scale(1);opacity:.55}70%,100%{transform:scale(1.75);opacity:0}}
@keyframes b{0%,100%{opacity:1}50%{opacity:.35}}
${RM}</style>` : ''}
</defs>
<rect width="512" height="512" rx="${animated ? 116 : 0}" fill="url(#bg)"/>
<rect width="512" height="512" rx="${animated ? 116 : 0}" fill="url(#glow)"/>
<g transform="translate(-14 6)">${animated ? `<circle class="ring" cx="270" cy="216" r="94" fill="none" stroke="${C.mint}" stroke-width="6"/><circle class="ring ring2" cx="270" cy="216" r="94" fill="none" stroke="${C.cyan}" stroke-width="6"/>` : ''}${mark()}
<circle class="dot" cx="352" cy="364" r="22" fill="${C.amber}"/></g>
</svg>`;
w('logo.svg', logo(true));
w('logo-avatar.svg', logo(false));
w('logo-mark.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="130 100 280 320" role="img" aria-label="PaidMCP mark"><defs>${markGrad}</defs>${mark()}<circle cx="352" cy="364" r="22" fill="${C.amber}"/></svg>`);

// ---------- hero ----------
const chip = (x, y, t, col) => { const wd = t.length * 7.3 + 24; return `<g transform="translate(${x} ${y})"><rect width="${wd}" height="28" rx="14" fill="${col}" fill-opacity=".08" stroke="${col}" stroke-opacity=".45"/><text x="${wd/2}" y="18.5" text-anchor="middle" font-family="${MONO}" font-size="12" fill="${col}">${t}</text></g>`; };
let cx = 56; const chips = [['native MCP',C.mint],['x402',C.amber],['pay-per-call',C.cyan],['testnet first',C.mint]].map(([t,c]) => { const s = chip(cx, 262, t, c); cx += t.length*7.3 + 24 + 10; return s; }).join('');
const pill = (i, t, col) => `<g class="pl pl${i}"><rect x="-105" y="-15" width="210" height="30" rx="15" fill="${C.bg0}" stroke="${col}" stroke-opacity=".6"/><circle cx="-86" cy="0" r="4" fill="${col}"/><text x="8" y="4.5" text-anchor="middle" font-family="${MONO}" font-size="12.5" fill="${col}">${t}</text></g>`;
const node = (x, y, label, sub) => `<g transform="translate(${x} ${y})"><rect width="112" height="76" rx="14" fill="${C.bg0}" stroke="${C.line}" stroke-width="1.5"/><rect width="112" height="76" rx="14" fill="none" stroke="url(#g)" stroke-opacity=".5" class="nb"/><text x="56" y="34" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="15" fill="${C.ink}">${label}</text><text x="56" y="54" text-anchor="middle" font-family="${MONO}" font-size="11" fill="${C.mute}">${sub}</text></g>`;
w('hero.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 340" role="img" aria-label="PaidMCP: open infrastructure for monetizable MCP servers">
<defs>${grad()}${markGrad}${bgGrad}
<pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r="1.2" fill="#fff" fill-opacity=".06"/></pattern>
<filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="50"/></filter>
<clipPath id="card"><rect width="1000" height="340" rx="22"/></clipPath>
<style>
.blob1{animation:d1 14s ease-in-out infinite alternate}
.blob2{animation:d2 18s ease-in-out infinite alternate}
@keyframes d1{to{transform:translate(120px,40px)}}
@keyframes d2{to{transform:translate(-140px,-30px)}}
.in{opacity:0;animation:in .8s cubic-bezier(.2,.7,.2,1) forwards}
.i2{animation-delay:.15s}.i3{animation-delay:.3s}.i4{animation-delay:.45s}.i5{animation-delay:.6s}
@keyframes in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.cur{animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.wire{stroke-dasharray:4 7;animation:dash 1.2s linear infinite}
@keyframes dash{to{stroke-dashoffset:-22}}
.pk{opacity:0}
.pk1{animation:k1 8s linear infinite}.pk2{animation:k2 8s linear infinite}.pk3{animation:k3 8s linear infinite}.pk4{animation:k4 8s linear infinite}
@keyframes k1{0%{opacity:1;transform:translateX(0)}22%{opacity:1;transform:translateX(110px)}25%,100%{opacity:0;transform:translateX(110px)}}
@keyframes k2{0%,25%{opacity:0;transform:translateX(110px)}25.1%{opacity:1}47%{opacity:1;transform:translateX(0)}50%,100%{opacity:0;transform:translateX(0)}}
@keyframes k3{0%,50%{opacity:0;transform:translateX(0)}50.1%{opacity:1}72%{opacity:1;transform:translateX(110px)}75%,100%{opacity:0;transform:translateX(110px)}}
@keyframes k4{0%,75%{opacity:0;transform:translateX(110px)}75.1%{opacity:1}97%{opacity:1;transform:translateX(0)}100%{opacity:0;transform:translateX(0)}}
.pl{opacity:0;animation:pl 8s linear infinite}
.pl2{animation-delay:2s}.pl3{animation-delay:4s}.pl4{animation-delay:6s}
@keyframes pl{0%{opacity:0;transform:translateY(6px)}3%,22%{opacity:1;transform:none}25%,100%{opacity:0;transform:translateY(-6px)}}
.nb{animation:nb 4s ease-in-out infinite}
@keyframes nb{50%{stroke-opacity:1}}
.orb{transform-origin:797px 150px;animation:spin 40s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
${RM}
@media (prefers-reduced-motion: reduce){.in,.pl1{opacity:1}}
</style></defs>
<g clip-path="url(#card)">
<rect width="1000" height="340" fill="url(#bg)"/>
<circle class="blob1" cx="140" cy="20" r="150" fill="${C.mint}" fill-opacity=".16" filter="url(#blur)"/>
<circle class="blob2" cx="900" cy="330" r="170" fill="${C.cyan}" fill-opacity=".15" filter="url(#blur)"/>
<rect width="1000" height="340" fill="url(#dots)"/>
</g>
<rect x=".75" y=".75" width="998.5" height="338.5" rx="22" fill="none" stroke="${C.line}" stroke-width="1.5"/>

<g class="in"><svg x="52" y="52" width="76" height="87" viewBox="130 100 280 320">${mark()}<circle cx="352" cy="364" r="22" fill="${C.amber}"/></svg>
<text x="142" y="118" font-family="${SANS}" font-weight="800" font-size="60" letter-spacing="-1.5" fill="${C.ink}">Paid<tspan fill="url(#g)">MCP</tspan></text></g>
<text class="in i2" x="56" y="186" font-family="${SANS}" font-weight="600" font-size="21" fill="${C.ink}">Open infrastructure for monetizable MCP servers.</text>
<text class="in i3" x="56" y="222" font-family="${MONO}" font-size="14.5" fill="${C.mute}"><tspan fill="${C.mint}">$</tspan> agents connect, pay per call, settle in stablecoins<tspan class="cur" fill="${C.mint}"> ▍</tspan></text>
<g class="in i4">${chips}</g>

<g class="in i5">
<circle class="orb" cx="797" cy="150" r="128" fill="none" stroke="${C.line}" stroke-dasharray="2 10" stroke-width="1.5"/>
<path class="wire" d="M742 150H852" stroke="${C.dim}" stroke-width="2" fill="none"/>
${node(630, 112, 'AI agent', 'MCP client')}
${node(852, 112, 'MCP server', '/mcp + x402')}
<g transform="translate(742 150)">
<circle class="pk pk1" r="6" fill="${C.ink}"/><circle class="pk pk2" r="6" fill="${C.amber}"/><circle class="pk pk3" r="6" fill="${C.mint}"/><circle class="pk pk4" r="6" fill="${C.cyan}"/>
</g>
<g transform="translate(797 234)">
${pill(1,'tools/call',C.ink)}${pill(2,'402 Payment Required',C.amber)}${pill(3,'x402 payment',C.mint)}${pill(4,'200 OK + result',C.cyan)}
</g>
</g>
</svg>`);

// ---------- how it works ----------
const steps = [
  ['01','Agent calls a tool','tools/call → /mcp',C.ink],
  ['02','Server quotes a price','HTTP 402 via x402',C.amber],
  ['03','Client pays per call','stablecoin settlement',C.mint],
  ['04','Result comes back','200 OK',C.cyan],
];
w('flow.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200" role="img" aria-label="How a paid MCP call works: the agent calls a tool, the server quotes a price with HTTP 402, the client pays per call in stablecoins, and the result comes back">
<defs>${bgGrad}<style>
.st{animation:st 8s linear infinite}
.s1{animation-delay:0s}.s2{animation-delay:2s}.s3{animation-delay:4s}.s4{animation-delay:6s}
@keyframes st{0%{stroke-opacity:.15}4%,22%{stroke-opacity:1}28%,100%{stroke-opacity:.15}}
.gl{opacity:0;animation:gl 8s linear infinite}
@keyframes gl{0%{opacity:0}4%,22%{opacity:.1}28%,100%{opacity:0}}
.wire{stroke-dasharray:3 6;animation:dash 1s linear infinite}
@keyframes dash{to{stroke-dashoffset:-18}}
.tr{opacity:0;animation:tr 8s linear infinite}
@keyframes tr{0%,17%{opacity:0;transform:translateX(0)}18%{opacity:1}25%{opacity:1;transform:translateX(34px)}26%,100%{opacity:0;transform:translateX(34px)}}
${RM}</style></defs>
<rect x=".75" y=".75" width="998.5" height="198.5" rx="20" fill="url(#bg)" stroke="${C.line}" stroke-width="1.5"/>
${steps.map(([n,t,s,col],i) => { const x = 28 + i*242; return `
<g transform="translate(${x} 34)">
<rect class="gl s${i+1}" width="218" height="132" rx="14" fill="${col}"/>
<rect width="218" height="132" rx="14" fill="none" stroke="${C.line}" stroke-width="1.5"/>
<rect class="st s${i+1}" width="218" height="132" rx="14" fill="none" stroke="${col}" stroke-width="1.5"/>
<text x="20" y="38" font-family="${MONO}" font-size="13" fill="${col}">${n}</text>
<text x="20" y="76" font-family="${SANS}" font-weight="700" font-size="17" fill="${C.ink}">${t}</text>
<text x="20" y="104" font-family="${MONO}" font-size="12.5" fill="${C.mute}">${s}</text>
</g>
${i<3 ? `<path class="wire" d="M${x+218} 100h24" stroke="${C.dim}" stroke-width="2"/><g transform="translate(${x+213} 100)"><circle class="tr s${i+1}" r="5" fill="${col}"/></g>` : ''}`; }).join('')}
</svg>`);

// ---------- terminals ----------
const esc = c => c.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const term = (file, title, lines, label) => {
  let t = 0.4; const total = 12;
  const body = lines.map(([txt, kind], i) => {
    const y = 66 + i*24;
    if (kind !== 'cmd') { const s = `<text class="t" style="animation-delay:${t.toFixed(2)}s" x="22" y="${y}" font-family="${MONO}" font-size="12" fill="${C.dim}">${txt}</text>`; t += .45; return s; }
    const chars = [...txt].map((c, j) => { const d = j < 2 ? t : t + .25 + (j-2)*.055; return `<tspan class="t" style="animation-delay:${d.toFixed(2)}s"${j < 2 ? ` fill="${C.mint}"` : ''}>${esc(c)}</tspan>`; }).join('');
    t += .25 + (txt.length-2)*.055 + .55;
    return `<text x="22" y="${y}" font-family="${MONO}" font-size="12" fill="${C.ink}" xml:space="preserve">${chars}</text>`;
  }).join('\n');
  w(file, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 ${74 + lines.length*24}" role="img" aria-label="${label}">
<defs>${bgGrad}<style>.t{opacity:0;animation:t ${total}s linear infinite}@keyframes t{0%{opacity:0}.1%,88%{opacity:1}88.1%,100%{opacity:0}}@media (prefers-reduced-motion: reduce){.t{animation:none;opacity:1}}</style></defs>
<rect x=".75" y=".75" width="438.5" height="${72.5 + lines.length*24}" rx="14" fill="url(#bg)" stroke="${C.line}" stroke-width="1.5"/>
<path d="M1 34h438" stroke="${C.line}" stroke-width="1.5"/>
<circle cx="22" cy="18" r="5" fill="#FF5F57"/><circle cx="40" cy="18" r="5" fill="#FEBC2E"/><circle cx="58" cy="18" r="5" fill="#28C840"/>
<text x="220" y="22" text-anchor="middle" font-family="${MONO}" font-size="11.5" fill="${C.mute}">${title}</text>
${body}
</svg>`);
};
term('term-users.svg', 'users: managed wallet', [
  ['# 1. set up the client','c'],
  ['$ npx paidmcp-client init','cmd'],
  ['# 2. set up your wallet','c'],
  ['$ npx paidmcp-client wallet','cmd'],
  ['# 3. connect with a snippet from paidmcp.dev','c'],
  ['# start on testnet, go live when ready','c'],
], 'Users quick start: npx paidmcp-client init, npx paidmcp-client wallet, then connect with a snippet from paidmcp.dev');
term('term-builders.svg', 'builders: template', [
  ['# 1. fork paidmcp/template, then','c'],
  ['$ npm run setup','cmd'],
  ['# wallet + testnet-ready env defaults','c'],
  ['# 2. add your tools','c'],
  ['$ $EDITOR src/tools.ts','cmd'],
  ['# 3. deploy, submit to the directory','c'],
], 'Builders quick start: fork the template, npm run setup, edit src/tools.ts, deploy and submit to the directory');

// ---------- repo cards ----------
const icons = {
  template: `<path d="M8 6h10l6 6v14H8z M18 6v6h6" /><path d="M12 18h8M12 22h5"/>`,
  client: `<rect x="5" y="9" width="22" height="16" rx="3"/><path d="M5 14h22"/><circle cx="21.5" cy="19.5" r="1.6"/>`,
  examples: `<path d="M16 5l10 5.5v11L16 27 6 21.5v-11z"/><path d="M6 10.5L16 16l10-5.5M16 16v11"/>`,
  directory: `<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c4 3.5 4 18.5 0 22M16 5c-4 3.5-4 18.5 0 22"/>`,
};
const card = (name, tag, l1, l2, col) => w(`repo-${name}.svg`, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 132" role="img" aria-label="paidmcp/${name}: ${l1} ${l2}">
<defs>${bgGrad}<linearGradient id="sw" x1="0" x2="1"><stop offset="0" stop-color="${col}" stop-opacity="0"/><stop offset=".5" stop-color="${col}"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></linearGradient>
<clipPath id="cc"><rect width="440" height="132" rx="14"/></clipPath>
<style>.sw{animation:sw 5s ease-in-out infinite}@keyframes sw{0%{transform:translateX(-200px)}60%,100%{transform:translateX(460px)}}${RM}</style></defs>
<rect x=".75" y=".75" width="438.5" height="130.5" rx="14" fill="url(#bg)" stroke="${C.line}" stroke-width="1.5"/>
<g clip-path="url(#cc)"><rect class="sw" y="0" width="180" height="2" fill="url(#sw)"/></g>
<rect x="20" y="20" width="44" height="44" rx="11" fill="${col}" fill-opacity=".1" stroke="${col}" stroke-opacity=".4"/>
<g transform="translate(26 26)" fill="none" stroke="${col}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</g>
<text x="78" y="39" font-family="${MONO}" font-size="15" font-weight="700" fill="${C.ink}"><tspan fill="${C.mute}" font-weight="400">paidmcp/</tspan>${name}</text>
<text x="78" y="58" font-family="${MONO}" font-size="11" fill="${col}">${tag}</text>
<text x="20" y="92" font-family="${SANS}" font-size="13.5" fill="${C.mute}">${l1}</text>
<text x="20" y="111" font-family="${SANS}" font-size="13.5" fill="${C.mute}">${l2}</text>
<path d="M408 30l8 8-8 8" fill="none" stroke="${C.dim}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
card('template','for builders','Forkable native MCP + x402 server template.','Free testnet first.',C.mint);
card('client','for users','Optional managed wallet proxy,','with spending caps and confirmations.',C.cyan);
card('examples','reference','Flagship MCP server examples','to learn from and build on.',C.amber);
card('directory','paidmcp.dev','Source for paidmcp.dev,','the directory site.',C.mint);

// ---------- buttons ----------
const btn = (file, t, primary) => { const wd = Math.round(t.length*8.2 + 44); w(file, `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${wd} 40" width="${wd}" height="40" role="img" aria-label="${t}">
<defs>${grad()}</defs>
<rect x="1" y="1" width="${wd-2}" height="38" rx="19" fill="${primary ? 'url(#g)' : C.bg1}" stroke="${primary ? 'none' : C.line}" stroke-width="1.5"/>
<text x="${wd/2 - 7}" y="25" text-anchor="middle" font-family="${SANS}" font-weight="700" font-size="14" fill="${primary ? C.bg0 : C.ink}">${t}</text>
<path d="M${wd-27} 15l5 5-5 5" fill="none" stroke="${primary ? C.bg0 : C.mint}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`); };
btn('btn-directory.svg','Browse the directory',true);
btn('btn-connect.svg','Connect guide',false);
btn('btn-template.svg','Fork the template',false);

// ---------- divider ----------
w('divider.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 8" preserveAspectRatio="none" role="presentation">
<defs><linearGradient id="d" x1="0" x2="1"><stop offset="0" stop-color="${C.mint}" stop-opacity="0"/><stop offset=".35" stop-color="${C.mint}"/><stop offset=".65" stop-color="${C.cyan}"/><stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/></linearGradient>
<style>.m{animation:m 6s ease-in-out infinite alternate}@keyframes m{from{transform:translateX(-300px)}to{transform:translateX(300px)}}${RM}</style></defs>
<rect y="3.5" width="1000" height="1" fill="${C.dim}" fill-opacity=".35"/>
<rect class="m" x="300" y="3" width="400" height="2" rx="1" fill="url(#d)"/>
</svg>`);
