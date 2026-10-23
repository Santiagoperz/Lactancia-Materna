/* ===== PICTOGRAMAS ===== */
const P={
clock:`<circle cx="32" cy="32" r="24" fill="var(--sky-soft)" stroke="var(--sky)" stroke-width="3"/><path d="M32 32h10" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"/><path class="spin" d="M32 32V14" stroke="var(--coral)" stroke-width="3.5" stroke-linecap="round"/><circle cx="32" cy="32" r="3" fill="var(--ink)"/>`,
cold:`<g class="spin slow"><path d="M32 8v48M11 20l42 24M11 44l42-24" stroke="var(--sky)" stroke-width="4" stroke-linecap="round"/><path d="M26 12l6 6 6-6M26 52l6-6 6 6" fill="none" stroke="var(--sky)" stroke-width="3" stroke-linecap="round"/></g>`,
massage:`<circle cx="32" cy="38" r="20" fill="var(--skin)"/><circle cx="32" cy="38" r="6" fill="var(--areola)"/><g class="slx"><rect x="22" y="12" width="20" height="13" rx="6.5" fill="var(--hand)"/><path d="M12 18H6M52 18h6" stroke="var(--sky)" stroke-width="3" stroke-linecap="round"/></g>`,
latch:`<path d="M64 6C48 10 40 22 40 32s8 22 24 26Z" fill="var(--skin)"/><circle cx="52" cy="33" r="8" fill="var(--areola)"/><g class="bob"><circle cx="24" cy="32" r="15" fill="var(--baby)"/><path d="M22 26q4 3 8 0" stroke="var(--hair)" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="38" cy="36" r="4" fill="var(--lip)"/></g>`,
cup:`<path d="M18 26h28l-4 28H22z" fill="var(--sky-soft)" stroke="var(--sky)" stroke-width="3" stroke-linejoin="round"/><path d="M21 38h22l-2 15H23z" fill="var(--milk)"/><circle class="fall" cx="32" cy="10" r="4" fill="var(--milk)" stroke="var(--sky)" stroke-width="1.5"/>`,
skin:`<path class="beat" d="M32 54C14 40 8 32 8 22a12 12 0 0124-4 12 12 0 0124 4c0 10-6 18-24 32z" fill="var(--coral)"/>`,
doctor:`<circle cx="32" cy="32" r="24" fill="var(--coral-soft)"/><path class="beat" d="M27 16h10v11h11v10H37v11H27V37H16V27h11z" fill="var(--coral)"/>`,
drop:`<path class="float" d="M32 8C24 20 16 30 16 40a16 16 0 0032 0c0-10-8-20-16-32z" fill="var(--milk)" stroke="var(--sky)" stroke-width="3"/>`,
swap:`<g class="spin"><path d="M14 32a18 18 0 0130-13M50 32a18 18 0 01-30 13" fill="none" stroke="var(--sky)" stroke-width="4" stroke-linecap="round"/><path d="M45 11v9h-9M19 53v-9h9" fill="none" stroke="var(--sky)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>`,
finger:`<circle cx="28" cy="32" r="18" fill="var(--baby)"/><ellipse cx="42" cy="38" rx="5" ry="4" fill="var(--mouth)"/><g class="slx"><rect x="40" y="33" width="24" height="10" rx="5" fill="var(--hand)"/></g>`,
stop:`<circle cx="32" cy="32" r="26" fill="var(--coral-soft)"/><g class="beat"><rect x="21" y="26" width="22" height="22" rx="9" fill="var(--hand)"/><rect x="21" y="13" width="5" height="18" rx="2.5" fill="var(--hand)"/><rect x="27" y="10" width="5" height="20" rx="2.5" fill="var(--hand)"/><rect x="33" y="11" width="5" height="20" rx="2.5" fill="var(--hand)"/><rect x="39" y="15" width="5" height="17" rx="2.5" fill="var(--hand)"/></g>`,
nopac:`<circle cx="32" cy="36" r="10" fill="none" stroke="var(--sky)" stroke-width="4"/><ellipse cx="32" cy="24" rx="15" ry="6" fill="var(--sky-soft)" stroke="var(--sky)" stroke-width="3"/><path class="flash" d="M12 10l40 44" stroke="var(--coral)" stroke-width="5" stroke-linecap="round"/>`,
thermo:`<rect x="26" y="6" width="12" height="40" rx="6" fill="var(--surface)" stroke="var(--coral)" stroke-width="3"/><circle cx="32" cy="50" r="9" fill="var(--coral)"/><rect class="rise" x="29.5" y="16" width="5" height="32" rx="2.5" fill="var(--coral)"/>`,
diaper:`<path d="M10 22h44v8q-6 22-22 24Q16 52 10 30z" fill="var(--milk)" stroke="var(--sky)" stroke-width="3" stroke-linejoin="round"/><circle class="fall" cx="32" cy="8" r="4" fill="var(--sun)"/>`,
scale:`<path d="M8 46a24 24 0 0148 0z" fill="var(--sky-soft)" stroke="var(--sky)" stroke-width="3"/><path class="swing" d="M32 46V26" stroke="var(--coral)" stroke-width="4" stroke-linecap="round"/><rect x="6" y="46" width="52" height="8" rx="4" fill="var(--sky)"/>`,
moon:`<path class="float" d="M38 10a22 22 0 1014 34A18 18 0 0138 10z" fill="var(--sun)"/><text class="float" x="46" y="20" font-family="Nunito,sans-serif" font-weight="800" font-size="13" fill="var(--sky)">z</text>`,
air:`<g class="slx"><path d="M8 22h28a6 6 0 10-6-6M8 34h38a6 6 0 11-6 6M8 46h22" fill="none" stroke="var(--sky)" stroke-width="4" stroke-linecap="round"/></g>`,
pump:`<circle cx="36" cy="32" r="20" fill="var(--skin)"/><circle cx="20" cy="32" r="7" fill="var(--areola)"/><rect x="11" y="28" width="7" height="8" rx="3" fill="var(--nipple)"/><rect class="sqT" x="26" y="4" width="14" height="11" rx="5.5" fill="var(--hand)"/><rect class="sqB" x="26" y="49" width="14" height="11" rx="5.5" fill="var(--hand)"/><circle class="fall" cx="8" cy="40" r="3" fill="var(--milk)" stroke="var(--sky)"/>`,
bolt:`<path class="flash" d="M36 6L16 36h14l-4 22 22-32H34z" fill="var(--sun)" stroke="var(--amber)" stroke-width="2.5" stroke-linejoin="round"/>`,
lump:`<circle cx="32" cy="34" r="24" fill="var(--skin)"/><circle cx="32" cy="34" r="7" fill="var(--areola)"/><circle class="beat" cx="19" cy="21" r="8" fill="var(--coral)" opacity=".8"/>`,
hot:`<circle cx="32" cy="40" r="20" fill="var(--skin)"/><ellipse class="beat" cx="32" cy="40" rx="14" ry="12" fill="var(--coral)" opacity=".5"/><g class="float"><path d="M22 14q4-4 0-8M32 16q4-4 0-8M42 14q4-4 0-8" stroke="var(--coral)" stroke-width="3" fill="none" stroke-linecap="round"/></g>`,
cry:`<g class="wig"><circle cx="30" cy="32" r="20" fill="var(--baby)"/><path d="M19 27l7 3M41 27l-7 3" stroke="var(--hair)" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="30" cy="42" rx="6" ry="5" fill="var(--mouth)"/></g><circle class="fall" cx="18" cy="34" r="3" fill="var(--sky)"/>`,
both:`<circle class="alt1" cx="19" cy="34" r="15" fill="var(--skin)"/><circle class="alt2" cx="45" cy="34" r="15" fill="var(--skin)"/><circle cx="19" cy="34" r="5" fill="var(--areola)"/><circle cx="45" cy="34" r="5" fill="var(--areola)"/>`,
recline:`<path d="M14 20l26 34" stroke="var(--blouse)" stroke-width="15" stroke-linecap="round"/><circle cx="12" cy="13" r="8" fill="var(--skin)"/><g class="bob"><ellipse cx="36" cy="32" rx="12" ry="7" transform="rotate(52 36 32)" fill="var(--blanket)"/><circle cx="28" cy="23" r="6" fill="var(--baby)"/></g>`,
flat:`<circle cx="32" cy="34" r="22" fill="var(--skin)"/><circle cx="32" cy="34" r="10" fill="var(--areola)"/><ellipse class="squash" cx="32" cy="34" rx="6" ry="3.5" fill="#F7EFEC"/>`,
crack:`<circle cx="32" cy="34" r="22" fill="var(--skin)"/><circle cx="32" cy="34" r="10" fill="var(--areola)"/><path class="flash" d="M25 27l6 4-3 4 6 3-2 6" stroke="#A32E2E" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
align:`<circle cx="14" cy="20" r="8" fill="var(--baby)"/><rect x="22" y="15" width="32" height="12" rx="6" fill="var(--blanket)"/><path class="dash" d="M4 21h56" stroke="var(--mint)" stroke-width="3" stroke-dasharray="6 8"/><path d="M8 46h48" stroke="var(--ink)" stroke-width="3" stroke-linecap="round" opacity=".25"/>`,
belly:`<rect x="6" y="10" width="20" height="46" rx="10" fill="var(--blouse)"/><g class="bob"><rect x="30" y="20" width="16" height="32" rx="8" fill="var(--blanket)"/><circle cx="38" cy="14" r="7" fill="var(--baby)"/></g><path class="beat" d="M28 38c-1-2-4-1-3 1l3 3 3-3c1-2-2-3-3-1z" fill="var(--coral)"/>`,
support:`<rect x="10" y="22" width="44" height="14" rx="7" fill="var(--blanket)"/><circle cx="12" cy="24" r="8" fill="var(--baby)"/><path class="float" d="M6 44q26 10 52 0" fill="none" stroke="var(--skin-d)" stroke-width="7" stroke-linecap="round"/>`,
nose:`<path d="M64 6C48 10 40 22 40 32s8 22 24 26Z" fill="var(--skin)"/><rect x="34" y="28" width="8" height="8" rx="3" fill="var(--nipple)"/><circle cx="16" cy="32" r="14" fill="var(--baby)"/><circle cx="30" cy="28" r="4" fill="var(--baby)"/><path class="dash" d="M30 30h6" stroke="var(--coral)" stroke-width="3" stroke-dasharray="3 3"/>`,
search:`<g class="wig"><circle cx="27" cy="27" r="15" fill="var(--sky-soft)" stroke="var(--sky)" stroke-width="5"/><path d="M38 38l15 15" stroke="var(--sky)" stroke-width="7" stroke-linecap="round"/></g>`,
mouth:`<circle cx="30" cy="32" r="22" fill="var(--baby)"/><ellipse class="beat" cx="36" cy="38" rx="9" ry="7" fill="var(--mouth)"/><circle cx="33" cy="37" r="1.6" fill="#fff"/><circle cx="39" cy="40" r="1.6" fill="#fff"/><circle cx="37" cy="35" r="1.4" fill="#fff"/>`
};
const pi=k=>`<svg class="pi" viewBox="0 0 64 64" aria-hidden="true">${P[k]}</svg>`;
const tile=(k,t,cls='')=>`<div class="tile pop ${cls}">${pi(k)}<span>${t}</span></div>`;

/* ===== ESCENAS ===== */
const heart=(x,y,d,s=1)=>`<g transform="translate(${x} ${y}) scale(${s})"><path class="ht" style="animation-delay:${d}s" d="M0 4c-3-6-12-4-10 3c1 4 6 7 10 11c4-4 9-7 10-11c2-7-7-9-10-3z" fill="var(--coral)"/></g>`;
const hearts=(x,y)=>heart(x,y,0)+heart(x+22,y+10,1.2,.8)+heart(x-14,y+16,2.3,.7);
function momFront(){return `
<path d="M138 76q0-52 42-52t42 52q3 38 13 62q-30 12-55 6q-25 6-55-6q10-24 13-62z" fill="var(--hair)"/>
<path d="M168 98h24v26q-12 7-24 0z" fill="var(--skin-d)"/>
<path d="M110 130Q180 110 250 130Q272 140 276 180L284 300H76L84 180Q88 140 110 130Z" fill="var(--blouse)"/>
<path d="M158 123q22 15 44 0" fill="none" stroke="var(--blouse-d)" stroke-width="4" stroke-linecap="round"/>
<g class="momhead"><ellipse cx="180" cy="76" rx="27" ry="31" fill="var(--skin)"/>
<path d="M152 72q2-40 30-40q27 0 27 37q-10-19-33-21q-12 7-24 24z" fill="var(--hair)"/>
<path d="M165 82q5 4 10 0M186 82q5 4 10 0" fill="none" stroke="var(--hair)" stroke-width="2.6" stroke-linecap="round"/>
<path d="M174 95q6 5 12 0" fill="none" stroke="#B4565A" stroke-width="2.6" stroke-linecap="round"/>
<circle cx="163" cy="90" r="5" fill="#F29C93" opacity=".55"/><circle cx="197" cy="90" r="5" fill="#F29C93" opacity=".55"/></g>`}
const babyBack=(cx,cy,r=23)=>`<g class="bhead"><circle cx="${cx}" cy="${cy}" r="${r}" fill="var(--baby)"/><path d="M${cx-13} ${cy-15}q9-10 19-3q-7 1-7 8" fill="none" stroke="var(--hair)" stroke-width="2.6" stroke-linecap="round"/><ellipse cx="${cx+3}" cy="${cy+3}" rx="5" ry="7" fill="var(--baby-d)"/></g>`;
const blanket=d=>`<path d="${d}" fill="var(--blanket)"/>`;
const sleeve=d=>`<path d="${d}" fill="none" stroke="var(--blouse)" stroke-width="28" stroke-linecap="round"/>`;
const arm=(d,w=17)=>`<path d="${d}" fill="none" stroke="var(--skin)" stroke-width="${w}" stroke-linecap="round"/>`;
const hand=(x,y,r=9)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="var(--skin)"/>`;
const shadow=`<ellipse cx="180" cy="292" rx="150" ry="16" fill="var(--blouse-d)" opacity=".12"/>`;
const arrowHint=d=>`<path class="arrowhint" d="${d}" fill="none" stroke="var(--coral)" stroke-width="4" stroke-dasharray="7 7" stroke-linecap="round" marker-end="url(#ah)"/>`;
const defs=`<defs><marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--coral)"/></marker></defs>`;
const babyCuna=`${blanket('M150 197Q158 172 206 174Q262 176 270 200Q262 228 206 228Q160 228 150 197Z')}<path d="M178 182q28-6 58 0M182 214q28 5 56 0" fill="none" stroke="var(--blanket-d)" stroke-width="3" stroke-linecap="round"/><circle cx="270" cy="198" r="10" fill="var(--baby)"/>`;

const scenes={
cuna:()=>`<svg viewBox="0 0 360 300" role="img" aria-label="Posición de cuna">${defs}${shadow}${momFront()}
${sleeve('M252 138Q280 175 268 212')}
<g class="bring" style="--bx:34px;--by:8px;--br:5deg"><g class="align">${babyCuna}${babyBack(146,182)}</g></g>
${arm('M94 214Q150 238 230 222')}${sleeve('M110 138Q84 175 94 212')}
${arm('M268 212Q262 224 244 214',15)}${hand(242,212)}
${arrowHint('M262 250Q210 262 170 236')}${hearts(205,120)}
<g class="km k1"><path class="dash" d="M112 178L292 206" stroke="var(--mint)" stroke-width="5" stroke-dasharray="10 4" stroke-linecap="round"/></g>
<g class="km k2"><ellipse class="hl" cx="206" cy="200" rx="74" ry="38" fill="none" stroke="var(--mint)" stroke-width="5"/></g>
<g class="km k3"><ellipse class="hl" cx="165" cy="226" rx="78" ry="16" fill="none" stroke="var(--mint)" stroke-width="5"/></g>
<g class="km k4"><circle class="hl" cx="146" cy="180" r="32" fill="none" stroke="var(--mint)" stroke-width="5"/></g>
<g class="xmark"><circle cx="122" cy="226" r="18" fill="var(--coral)"/><path d="M115 219l14 14M129 219l-14 14" stroke="#fff" stroke-width="4" stroke-linecap="round"/></g>
</svg>`,
cruzada:()=>`<svg viewBox="0 0 360 300" role="img" aria-label="Posición de cuna cruzada">${defs}${shadow}${momFront()}
${sleeve('M110 138Q92 160 112 174')}
<g class="bring" style="--bx:34px;--by:10px;--br:5deg">${babyCuna}${babyBack(146,184)}${arm('M268 222Q215 226 162 204')}${hand(156,200,10)}</g>
${sleeve('M252 138Q284 185 270 220')}
<path d="M120 172q16-14 34-10M120 172q4 14 18 14" fill="none" stroke="var(--skin)" stroke-width="11" stroke-linecap="round"/>
<circle class="ring" cx="134" cy="170" r="20" fill="none" stroke="var(--sun)" stroke-width="4"/>
<circle class="ring" cx="156" cy="200" r="20" fill="none" stroke="var(--sun)" stroke-width="4" style="animation-delay:.8s"/>
${arrowHint('M262 252Q210 262 172 238')}${hearts(205,120)}</svg>`,
balon:()=>`<svg viewBox="0 0 360 300" role="img" aria-label="Posición de balón de rugby">${defs}${shadow}
<rect x="18" y="214" width="170" height="36" rx="18" fill="var(--pillow)"/>${momFront()}
${sleeve('M252 138Q262 172 226 174')}${hand(212,172,10)}
<g class="bring" style="--bx:-34px;--by:10px;--br:-5deg">${blanket('M146 196Q140 220 100 222Q46 222 36 200Q44 176 100 176Q140 176 146 196Z')}
<path d="M66 184q30-5 60 0M64 214q30 5 60 0" fill="none" stroke="var(--blanket-d)" stroke-width="3" stroke-linecap="round"/><circle cx="36" cy="198" r="10" fill="var(--baby)"/>${babyBack(150,184)}</g>
${arm('M70 200Q110 204 140 200')}${hand(146,198,10)}${sleeve('M110 138Q72 160 70 198')}
${arrowHint('M30 250Q80 266 128 236')}${hearts(205,120)}</svg>`,
lado:()=>`<svg viewBox="0 0 360 300" role="img" aria-label="Posición acostada de lado">${defs}
<rect x="8" y="226" width="344" height="46" rx="18" fill="var(--bed)"/><ellipse cx="66" cy="160" rx="58" ry="26" fill="var(--pillow)"/>
<path d="M250 132L340 140Q352 176 340 214L250 220Z" fill="var(--pants)"/>
<path d="M98 140Q112 118 160 120L262 128Q284 172 262 222L160 224Q112 222 100 196Z" fill="var(--blouse)"/>
<path d="M50 126q0-34 30-36q30 0 34 30q-4 22-14 34q-30 6-50-28z" fill="var(--hair)"/>
<ellipse cx="88" cy="132" rx="25" ry="28" fill="var(--skin)"/>
<path d="M64 128q2-30 28-30q22 2 24 24q-14-10-28-6q-14 2-24 12z" fill="var(--hair)"/>
<path d="M96 136q5 4 10 0" fill="none" stroke="var(--hair)" stroke-width="2.6" stroke-linecap="round"/><path d="M98 150q6 4 11 0" fill="none" stroke="#B4565A" stroke-width="2.6" stroke-linecap="round"/>
<g class="bring" style="--bx:0px;--by:26px;--br:0deg">${blanket('M160 204Q166 184 208 184Q252 186 256 204Q252 224 208 224Q166 224 160 204Z')}<circle cx="256" cy="204" r="9" fill="var(--baby)"/>${babyBack(150,190,21)}</g>
${sleeve('M126 140Q160 150 180 168')}${arm('M182 170Q205 182 228 190')}${hand(232,191)}${hearts(170,90)}</svg>`,
reclinada:()=>`<svg viewBox="0 0 360 300" role="img" aria-label="Posición reclinada">${defs}
<path d="M16 286L64 64Q76 40 100 52L150 286Z" fill="var(--pillow)"/>
<path d="M214 240L344 252" stroke="var(--pants)" stroke-width="54" stroke-linecap="round"/>
<path d="M104 112L212 240" stroke="var(--blouse)" stroke-width="72" stroke-linecap="round"/>
<path d="M60 86q-2-38 30-40q30 0 30 30q-6 26-24 38q-30 2-36-28z" fill="var(--hair)"/>
<circle cx="92" cy="82" r="26" fill="var(--skin)"/><path d="M66 80q0-30 28-30q24 2 24 26q-12-12-26-10q-14 2-26 14z" fill="var(--hair)"/>
<path d="M100 86q5 4 10 0" fill="none" stroke="var(--hair)" stroke-width="2.6" stroke-linecap="round"/><path d="M104 99q5 4 10 0" fill="none" stroke="#B4565A" stroke-width="2.6" stroke-linecap="round"/>
<g class="bring" style="--bx:20px;--by:-26px;--br:0deg"><ellipse cx="192" cy="160" rx="44" ry="21" transform="rotate(50 192 160)" fill="var(--blanket)"/><circle cx="222" cy="196" r="9" fill="var(--baby)"/>${babyBack(158,120,21)}</g>
${arm('M140 186Q172 168 214 146',15)}${hand(218,144)}${hearts(210,60)}</svg>`
};

function profile(state,id){return `<svg viewBox="0 0 400 300" data-s="${state}" id="${id}" role="img" aria-label="Agarre visto de lado">${defs}
<defs><clipPath id="bc${id}"><path d="M400 0V300H380C320 270 282 215 282 150S320 30 380 0Z"/></clipPath></defs>
<path d="M400 0V300H380C320 270 282 215 282 150S320 30 380 0Z" fill="var(--skin)"/>
<circle cx="304" cy="150" r="44" fill="var(--areola)" clip-path="url(#bc${id})"/>
<rect x="266" y="141" width="22" height="18" rx="8" fill="var(--nipple)"/>
<path d="M330 0H400V40Q360 30 330 0Z" fill="var(--blouse)"/><path d="M330 300H400V262Q360 272 330 300Z" fill="var(--blouse)"/>
<circle class="drop d1" cx="262" cy="150" r="4" fill="var(--milk)"/><circle class="drop d2" cx="262" cy="148" r="3.5" fill="var(--milk)"/><circle class="drop d3" cx="262" cy="152" r="3" fill="var(--milk)"/>
<line class="g1 dash" x1="196" y1="152" x2="258" y2="150" stroke="var(--coral)" stroke-width="4" stroke-dasharray="8 6"/>
<g class="pb">
 <path d="M-34 36Q-110 70-160 170H-40Q-6 110 24 56Z" fill="var(--blanket)"/>
 <circle r="62" fill="var(--baby)"/>
 <path d="M-36-50q20-22 46-14q-8 2-10 10M-6-58q16-12 32-2" fill="none" stroke="var(--hair)" stroke-width="3" stroke-linecap="round"/>
 <ellipse cx="-16" cy="4" rx="10" ry="13" fill="var(--baby-d)"/>
 <path d="M24-16q9 7 18 0" fill="none" stroke="var(--hair)" stroke-width="3" stroke-linecap="round"/>
 <circle cx="34" cy="12" r="11" fill="#F29C93" opacity=".45"/>
 <circle cx="60" cy="-6" r="8" fill="var(--baby)"/>
 <ellipse cx="54" cy="26" rx="15" ry="12" fill="var(--mouth)"/>
 <path d="M50 14q10-3 18 2q-2 5-8 5q-6 0-10-7z" fill="var(--lip)"/>
 <g transform="translate(14 18)"><g class="jawr"><path d="M0 0L44 4Q56 6 54 16Q46 38 14 40Q-10 38-20 22Z" fill="var(--baby)"/><path d="M38 6q14-1 17 8q-9 5-18 1z" fill="var(--lip)"/></g></g>
 <path class="dimple" d="M38 0q-6 10 0 22" fill="none" stroke="var(--baby-d)" stroke-width="3.5" stroke-linecap="round"/>
</g>
<g class="g2"><circle class="ring" cx="214" cy="190" r="26" fill="none" stroke="var(--sun)" stroke-width="5"/></g>
<g class="g3"><path class="dash" d="M90 250H190" stroke="var(--coral)" stroke-width="5" stroke-dasharray="10 6" stroke-linecap="round" marker-end="url(#ah)"/></g>
<g class="g4"><circle class="ring" cx="270" cy="182" r="24" fill="none" stroke="var(--mint)" stroke-width="5"/></g>
<g class="gbad"><g transform="translate(250 104)"><path class="pain" d="M0-14L5-3L16-2L7 5L10 16L0 10L-10 16L-7 5L-16-2L-5-3Z" fill="var(--coral)"/></g></g>
</svg>`}

const expSVG=()=>`<svg viewBox="0 0 400 300" role="img" aria-label="Extracción manual">
<clipPath id="bcx"><path d="M400 0V300H380C320 270 282 215 282 150S320 30 380 0Z"/></clipPath>
<path d="M400 0V300H380C320 270 282 215 282 150S320 30 380 0Z" fill="var(--skin)"/>
<circle cx="304" cy="150" r="44" fill="var(--areola)" clip-path="url(#bcx)"/>
<rect x="266" y="141" width="22" height="18" rx="8" fill="var(--nipple)"/>
<path d="M330 0H400V40Q360 30 330 0Z" fill="var(--blouse)"/><path d="M330 300H400V262Q360 272 330 300Z" fill="var(--blouse)"/>
<g class="thumb"><path d="M380 30Q340 60 330 100" fill="none" stroke="var(--hand)" stroke-width="26" stroke-linecap="round"/><ellipse cx="331" cy="104" rx="10" ry="7" fill="#F6D9C7"/></g>
<g class="finger"><path d="M392 280Q346 240 330 200" fill="none" stroke="var(--hand)" stroke-width="24" stroke-linecap="round"/><ellipse cx="331" cy="196" rx="9" ry="6" fill="#F6D9C7"/></g>
<text x="196" y="66" font-family="Nunito,sans-serif" font-weight="800" font-size="18" fill="var(--sky)">2–3 cm</text>
<path d="M260 72Q290 70 318 98" fill="none" stroke="var(--sky)" stroke-width="3" stroke-dasharray="5 5"/>
<circle class="xdrop" cx="260" cy="150" r="5" fill="var(--milk)" stroke="var(--sky)"/><circle class="xdrop b" cx="258" cy="146" r="4" fill="var(--milk)" stroke="var(--sky)"/><circle class="xdrop c" cx="258" cy="154" r="4" fill="var(--milk)" stroke="var(--sky)"/>
<path d="M150 236h72q10 0 10 10v20q0 14-14 14h-64q-14 0-14-14v-20q0-10 10-10z" fill="var(--sky-soft)" stroke="var(--sky)" stroke-width="3"/>
</svg>`;

/* ===== DATOS ===== */
const align={ok:[["align","Cabeza y cuerpo en línea recta"],["belly","Barriga con barriga"],["support","Todo el cuerpo sostenido"],["nose","Nariz frente al pezón"]],
 no:[["align","Cuello torcido"],["belly","Separado de la mamá"],["support","Cuerpo colgando"],["nose","Boca lejos del pecho"]]};
const positions={
 cuna:{n:"Cuna",t:"Cuna",tags:["Uso diario","Buen agarre"],s:[["support","Cabeza en el pliegue del codo"],["belly","Barriga con barriga"],["latch","Bebé al pecho, no al revés"]]},
 cruzada:{n:"Cuna cruzada",t:"Cuna cruzada",tags:["Recién nacidos","Prematuros","Agarre difícil"],s:[["support","Mano en la nuca"],["pump","Pecho sostenido en “C”"],["latch","Boca grande y acercar"]]},
 balon:{n:"Balón de rugby",t:"Balón de rugby",tags:["Cesárea","Gemelos","Pechos grandes"],s:[["support","Bebé bajo el brazo"],["recline","Almohada para elevar"],["nose","Nariz frente al pezón"]]},
 lado:{n:"De lado",t:"Acostada de lado",tags:["Noche","Cesárea","Descanso"],s:[["belly","Frente a frente"],["moon","Almohada en cabeza y rodillas"],["nose","Nariz frente al pezón"]]},
 reclinada:{n:"Reclinada",t:"Reclinada",tags:["Primeras horas","Flujo rápido","Rechazo"],s:[["recline","Mamá recostada 30–45°"],["skin","Bebé boca abajo, piel a piel"],["search","Él busca y se prende solo"]]}
};
const latch=[["Nariz al pezón","El pezón apunta a la nariz"],["Boca grande","Como un bostezo"],["Mentón primero","Acercar al bebé rápido"],["Agarre profundo","Labios afuera, nariz libre"]];
const probs={
 dolor:{t:"Pezón doloroso",i:"bolt",r:[["bolt","Dolor después del primer minuto"],["flat","Pezón aplanado o blanco"]],h:[["latch","Corregir el agarre"],["swap","Cambiar de posición"],["finger","Retirar con el meñique"],["both","Empezar por el lado sano"]],x:[["doctor","Dolor que no cede"],["mouth","Placas blancas en la boca del bebé"]]},
 grietas:{t:"Grietas",i:"crack",r:[["crack","Fisuras o sangrado"],["bolt","Dolor fuerte al iniciar"]],h:[["latch","Corregir el agarre"],["drop","Gotas de leche al final"],["air","Secar al aire"],["pump","Si duele mucho, extraer"],["cup","Dar con vaso o cuchara"]],x:[["hot","Pus, rojo o fiebre"],["clock","Sin mejoría en 1 semana"]]},
 ingurg:{t:"Ingurgitación",i:"hot",r:[["hot","Pechos duros y calientes"],["flat","Areola tensa"]],h:[["clock","8–12 tomas al día"],["pump","Ablandar la areola antes"],["cold","Frío entre tomas"],["massage","Masaje muy suave"],["stop","Nada de masaje fuerte"]],x:[["thermo","Fiebre mayor de 38 °C"],["cry","No logra agarrarse"]]},
 mastitis:{t:"Obstrucción y mastitis",i:"lump",r:[["lump","Bulto doloroso"],["hot","Zona roja y caliente"],["thermo","Fiebre y malestar"]],h:[["latch","Seguir amamantando"],["cold","Frío local"],["massage","Masaje suave tipo caricia"],["stop","No sobreextraer"],["moon","Descanso"]],x:[["clock","Sin mejoría en 12–24 h"],["lump","Bulto que no cede"],["doctor","Mal estado general"]]},
 baja:{t:"Baja producción",i:"diaper",r:[["diaper","Menos de 6 pañales desde el día 5"],["scale","Poca ganancia de peso"]],h:[["clock","8–12 tomas, también de noche"],["latch","Revisar el agarre"],["pump","Comprimir el pecho en la toma"],["both","Ofrecer ambos pechos"],["skin","Piel a piel"],["nopac","Sin chupos ni biberones"]],x:[["scale","Pérdida de peso mayor al 10 %"],["cry","Bebé decaído"],["doctor","Suplemento solo con indicación"]]},
 rechazo:{t:"Rechazo del pecho",i:"cry",r:[["cry","Llora y arquea la espalda"]],h:[["stop","Nunca forzar"],["skin","Piel a piel"],["moon","Ofrecer adormilado y en calma"],["recline","Probar la reclinada"],["cup","Leche extraída en vaso"]],x:[["thermo","Bebé con fiebre"],["clock","Dura más de 24–48 h"]]}
};
const quiz=[
 {q:"¿Cuál es un buen agarre?",img:[()=>profile('bad','qa1'),()=>profile(4,'qa2')],o:["Opción A","Opción B"],a:1,e:"Boca llena de pecho, labio hacia afuera y mentón pegado."},
 {q:"Después de una cesárea, ¿qué posición evita presionar la herida?",img:[()=>scenes.cuna(),()=>scenes.balon()],o:["Cuna","Balón de rugby"],a:1,e:"El bebé va bajo el brazo, lejos del abdomen."},
 {q:"¿Qué toca primero el pecho?",o:["La nariz","El mentón","La frente"],a:1,e:"El mentón primero; la nariz queda libre."},
 {q:"Mejillas hundidas y chasquidos indican…",o:["Succión efectiva","Mal agarre","Hambre"],a:1,e:"Las mejillas deben verse redondas."},
 {q:"En la ingurgitación, NO se recomienda:",o:["Masaje fuerte","Frío entre tomas","Ablandar la areola"],a:0,e:"El masaje fuerte aumenta la inflamación."},
 {q:"Desde el día 5, ¿cuántos pañales mojados al día?",o:["2 a 3","4","6 o más"],a:2,e:"6 o más indican buena ingesta."}
];

/* ===== RENDER ===== */
const $=s=>document.querySelector(s);
function stagger(root){root.querySelectorAll('.pop').forEach((e,i)=>e.style.setProperty('--i',i))}
$('#coverScene').innerHTML=scenes.cuna();
$('#bubbles').innerHTML=Array.from({length:10},(_,i)=>`<i style="left:${8+i*9}%;width:${10+(i%4)*8}px;height:${10+(i%4)*8}px;animation-duration:${6+(i%5)*1.6}s;animation-delay:${i*.7}s"></i>`).join('');

$('#agenda').innerHTML=[["recline","Posición","2"],["latch","Agarre y succión","4"],["search","Identificar dificultades","7"],["pump","Manejo de problemas","8"]]
 .map(([k,t,g],i)=>`<button class="card pop" data-go="${g}">${pi(k)}<span class="n">${i+1}</span><h3>${t}</h3></button>`).join('');

/* 4 puntos */
$('#alignScene').innerHTML=scenes.cuna();
let alignBad=false,alignK=1,alignT=null;
function renderAlign(){const sv=$('#alignScene svg');sv.classList.toggle('wrong',alignBad);
  $('#aOk').classList.toggle('on',!alignBad);$('#aBad').classList.toggle('on',alignBad);
  $('#alignList').innerHTML=(alignBad?align.no:align.ok).map(([k,t])=>tile(k,t,'row '+(alignBad?'b':''))).join('');stagger($('#alignList'));setAlignK(alignK)}
function setAlignK(n){alignK=n;const sv=$('#alignScene svg');if(alignBad)sv.removeAttribute('data-k');else sv.dataset.k=n;
  if(!alignBad)$('#alignList').querySelectorAll('.tile').forEach((t,i)=>t.classList.toggle('act',i===n-1))}
$('#aOk').onclick=()=>{alignBad=false;renderAlign()};$('#aBad').onclick=()=>{alignBad=true;renderAlign()};renderAlign();

/* posiciones */
let posKey='cuna',posI=0;
$('#posChips').innerHTML=Object.entries(positions).map(([k,p])=>`<button class="chip" data-pos="${k}">${p.n}</button>`).join('');
function renderPos(k){posKey=k;posI=0;const p=positions[k];
  $('#posScene').innerHTML=scenes[k]();$('#posScene').classList.remove('play');void $('#posScene').offsetWidth;$('#posScene').classList.add('play');
  $('#posTitle').textContent=p.t;
  $('#posTags').innerHTML=p.tags.map(t=>`<span class="mini">${t}</span>`).join('');
  $('#posSteps').innerHTML=p.s.map(([ic,t])=>tile(ic,t,'row')).join('');stagger($('#posSteps'));
  document.querySelectorAll('[data-pos]').forEach(c=>c.classList.toggle('on',c.dataset.pos===k));hlPos()}
function hlPos(){$('#posSteps').querySelectorAll('.tile').forEach((t,i)=>t.classList.toggle('act',i===posI))}
document.querySelectorAll('[data-pos]').forEach(c=>c.onclick=()=>renderPos(c.dataset.pos));renderPos('cuna');

/* agarre */
$('#latchScene').innerHTML=profile(1,'pl');
$('#latchSteps').innerHTML=latch.map((l,i)=>`<button class="step" data-step="${i+1}"><b>${i+1}</b>${l[0]}</button>`).join('');
let latchT=null;
function setLatch(n){$('#pl').dataset.s=n;
  document.querySelectorAll('[data-step]').forEach(b=>{b.classList.remove('on');void b.offsetWidth;b.classList.toggle('on',+b.dataset.step===n)});
  $('#latchText').innerHTML=`${latch[n-1][0]}<small>${latch[n-1][1]}</small>`}
function stopLatch(){clearInterval(latchT);latchT=null;$('#latchPlay').textContent='▶ Reproducir'}
function playLatch(){stopLatch();let n=1;setLatch(n);$('#latchPlay').textContent='■ Pausar';
  latchT=setInterval(()=>{n=n%4+1;setLatch(n)},3000)}
document.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{stopLatch();setLatch(+b.dataset.step)});
$('#latchPlay').onclick=()=>latchT?stopLatch():playLatch();setLatch(1);

$('#goodScene').innerHTML=profile(4,'pg');$('#badScene').innerHTML=profile('bad','pbd');$('#suckScene').innerHTML=profile(4,'ps');
$('#suckTiles').innerHTML=[["drop","Se oye tragar"],["clock","8–12 tomas al día"],["both","Pecho más blando"],["skin","Termina tranquilo"]].map(([k,t])=>tile(k,t)).join('');
$('#diapers').innerHTML=[1,2,3,4,6].map((n,i)=>`<div class="dia ${i===4?'last':''}"><div class="d">Día ${i===4?'5+':i+1}</div><div class="ic">${Array.from({length:n},(_,j)=>`<i style="animation-delay:${.3+i*.25+j*.08}s"></i>`).join('')}</div></div>`).join('');

$('#lights').innerHTML=[
 ['g','Va bien',[["clock","8–12 tomas"],["drop","Se oye tragar"],["diaper","6+ pañales (día 5+)"],["scale","Recupera peso día 10–14"]]],
 ['a','Corregir y vigilar',[["bolt","Dolor persistente"],["flat","Pezón aplanado"],["moon","Bebé muy dormido"],["hot","Pechos duros"]]],
 ['r','Remitir ya',[["scale","Pierde más del 10 %"],["diaper","Pocos pañales"],["thermo","Madre con fiebre"],["cry","Bebé decaído"]]]
].map(([c,t,items])=>`<div class="light ${c} pop"><h3><span class="bulb"></span>${t}</h3><div class="list">${items.map(([k,x])=>`<div class="tile row">${pi(k)}<span>${x}</span></div>`).join('')}</div></div>`).join('');

$('#probs').innerHTML=Object.entries(probs).map(([k,p])=>`<button class="card prob pop" data-prob="${k}">${pi(p.i)}<h3>${p.t}</h3><span class="more">Ver →</span></button>`).join('');
function openProb(k){const p=probs[k];
  const grp=(c,t,arr)=>`<div class="grp ${c}"><h4><i></i>${t}</h4><div class="tiles">${arr.map(([ic,x])=>tile(ic,x)).join('')}</div></div>`;
  $('#sheetBox').innerHTML=`<div class="hd">${pi(p.i)}<h3>${p.t}</h3><button class="btn sm" data-close>Cerrar</button></div>
  ${grp('r','Se reconoce',p.r)}${grp('h','Qué hacer',p.h)}${grp('x','Remitir si…',p.x)}`;
  stagger($('#sheetBox'));$('#sheet').hidden=false;$('#sheetBox').scrollTop=0}
document.querySelectorAll('[data-prob]').forEach(b=>b.onclick=()=>openProb(b.dataset.prob));
document.querySelectorAll('.sheet').forEach(s=>s.addEventListener('click',e=>{if(e.target===s||e.target.closest('[data-close]'))s.hidden=true}));

/* extracción */
const xs=[["pump","Dedos en “C”"],["slide","Empujar hacia las costillas"],["squeeze","Comprimir sin deslizar"],["drop","Soltar y repetir"]];
$('#xsteps').innerHTML=[["pump","Dedos en “C”, a 2–3 cm"],["swap","Empujar hacia las costillas"],["massage","Comprimir sin deslizar"],["drop","Soltar y repetir"]].map(([k,t])=>tile(k,t,'row')).join('');
let xT=null;
function startX(){clearInterval(xT);$('#expScene').innerHTML=expSVG();let i=0;const li=()=>$('#xsteps').querySelectorAll('.tile');
  const hl=()=>{li().forEach((t,j)=>t.classList.toggle('act',j===i));i=(i+1)%4};hl();xT=setInterval(hl,800)}

/* quiz */
let qi=0,score=0;
function confetti(){const c=document.createElement('div');c.className='confetti';
  const cols=['var(--sky)','var(--coral)','var(--sun)','var(--mint)'];
  c.innerHTML=Array.from({length:40},(_,i)=>`<i style="left:${Math.random()*100}%;background:${cols[i%4]};animation-delay:${Math.random()*.4}s"></i>`).join('');
  document.body.appendChild(c);setTimeout(()=>c.remove(),2300)}
function renderQuiz(){const box=$('#quiz');
  if(qi>=quiz.length){box.innerHTML=`<div class="tile pop" style="padding:30px">${pi('skin')}<h2>${score} de ${quiz.length}</h2><p class="muted" style="font-weight:700">${score===quiz.length?'¡Perfecto!':score>=4?'¡Muy bien!':'Repasemos un poco más'}</p><button class="btn pri" id="qAgain">Otra vez</button></div>`;
    stagger(box);if(score>=4)confetti();$('#qAgain').onclick=()=>{qi=0;score=0;renderQuiz()};return}
  const q=quiz[qi];
  box.innerHTML=`<p class="eyebrow">Pregunta ${qi+1} de ${quiz.length}</p><div class="qbar"><i style="width:${qi/quiz.length*100}%"></i></div>
  <h2 class="pop" style="font-size:clamp(24px,3vw,36px)">${q.q}</h2>
  <div class="opts ${q.img?'img':''}">${q.o.map((o,i)=>`<button class="opt pop play" data-o="${i}">${q.img?q.img[i]():''}${o}</button>`).join('')}</div><div id="qfb"></div>`;
  stagger(box);let done=false;
  box.querySelectorAll('[data-o]').forEach(b=>b.onclick=()=>{if(done)return;done=true;const i=+b.dataset.o,ok=i===q.a;if(ok){score++;confetti()}
    box.querySelectorAll('[data-o]').forEach(x=>{const j=+x.dataset.o;if(j===q.a)x.classList.add('right');else if(j===i)x.classList.add('wrong')});
    $('#qfb').innerHTML=`<div class="fb ${ok?'g':'b'}"><b>${ok?'¡Correcto!':'Casi.'}</b> ${q.e}</div><div style="margin-top:12px"><button class="btn pri" id="qNext">${qi===quiz.length-1?'Ver resultado':'Siguiente'} →</button></div>`;
    $('#qNext').onclick=()=>{qi++;renderQuiz()}})}
renderQuiz();

$('#keys').innerHTML=[["bolt","El dolor no es normal: revisa el agarre"],["latch","Bebé al pecho, no pecho al bebé"],["clock","Más tomas, más leche"],["doctor","Señal roja: remitir a tiempo"]]
 .map(([k,t])=>`<div class="key pop">${pi(k)}${t}</div>`).join('');

document.querySelectorAll('.slide').forEach(stagger);

/* ===== NAVEGACIÓN ===== */
const slides=[...document.querySelectorAll('.slide')];let cur=0,alignInt=null,posInt=null;
function go(i){i=Math.max(0,Math.min(slides.length-1,i));
  slides.forEach((s,k)=>{s.classList.toggle('on',k===i);s.classList.toggle('left',k<i)});cur=i;slides[i].scrollTop=0;
  $('#count').textContent=`${i+1}/${slides.length}`;$('#progBar').style.width=((i+1)/slides.length*100)+'%';
  $('#prev').disabled=i===0;$('#next').disabled=i===slides.length-1;
  const n=slides[i].dataset.name;
  clearInterval(alignInt);clearInterval(posInt);clearInterval(xT);stopLatch();
  if(n==='4 puntos clave'){setAlignK(1);alignInt=setInterval(()=>{if(!alignBad)setAlignK(alignK%4+1)},2400)}
  if(n==='Posiciones'){renderPos(posKey);posInt=setInterval(()=>{posI=(posI+1)%3;hlPos()},2200)}
  if(n==='Agarre paso a paso')playLatch();
  if(n==='Extracción manual')startX();}
$('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>go(cur+1);
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>go(+b.dataset.go));
document.addEventListener('keydown',e=>{if(!$('#sheet').hidden||!$('#indexSheet').hidden){if(e.key==='Escape'){$('#sheet').hidden=true;$('#indexSheet').hidden=true}return}
  if(e.key==='ArrowRight')go(cur+1);if(e.key==='ArrowLeft')go(cur-1)});
let sx=null,sy=0;const st=$('#stage');
st.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
st.addEventListener('touchend',e=>{if(sx===null)return;const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;sx=null;
  if(Math.abs(dx)>70&&Math.abs(dy)<50)go(cur+(dx<0?1:-1))},{passive:true});
$('#indexList').innerHTML=slides.map((s,i)=>`<li><button class="btn" data-idx="${i}">${i+1}. ${s.dataset.name}</button></li>`).join('');
document.querySelectorAll('[data-idx]').forEach(b=>b.onclick=()=>{$('#indexSheet').hidden=true;go(+b.dataset.idx)});
$('#openIndex').onclick=()=>$('#indexSheet').hidden=false;
go(0);