const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const bars = rows => rows.map(([l, v]) => `
  <div class="bar"><div class="bar-head"><span>${esc(l)}</span><b>${v}%</b></div>
  <div class="track"><i style="width:${v}%"></i></div></div>`).join("");
const list = (items, cls, icon) => `<ul class="${cls}">${items.map(t => `<li><span class="ic">${icon}</span>${esc(t)}</li>`).join("")}</ul>`;

document.getElementById("app").innerHTML = personas.map(p => `
<article class="card" style="--c:${p.color};--bg:${p.bg}">
  <header><span class="badge">TYPE ${p.type}</span><h1>${esc(p.title)}</h1><span class="target">${esc(p.target)}</span></header>
  <section class="box profile">
    <div class="avatar">${esc(p.name[0])}</div>
    <div><h2>${esc(p.name)}</h2><p class="meta">${esc(p.meta)}</p>
      <div>${p.tags.map(t => `<span class="tag">#${esc(t)}</span>`).join("")}</div></div>
    <dl>${p.info.map(([k, v]) => `<div><dt>${esc(k)}:</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
  </section>
  <blockquote>“${esc(p.quote)}”</blockquote>
  <section class="box"><h3>행동 성향 스펙트럼 <small>${esc(p.name)} 위치</small></h3>
    ${p.spectrum.map(([l, r, v]) => `
      <div class="spec"><div class="spec-lbl"><span>${esc(l)}</span><span>${esc(r)}</span></div>
      <div class="track"><i style="width:${v}%"></i></div></div>`).join("")}
  </section>
  <section class="box"><h3>배경 및 라이프스타일</h3><p>${esc(p.background)}</p></section>
  <section class="box goals"><h3>핵심 목표 (Goals)</h3>${list(p.goals, "ok", "✓")}</section>
  <section class="box frus"><h3>불만사항 및 어려움 (Frustrations)</h3>${list(p.frustrations, "no", "✕")}</section>
  <section class="box tint"><h4>현재 대처 방식 (WORKAROUND)</h4><p>${esc(p.workaround)}</p></section>
  <section class="box"><h3>동기부여 요소</h3>${bars(p.motivations)}</section>
  <section class="box"><h3>선호 정보 채널</h3>${bars(p.channels)}</section>
  <section class="box"><h3>핵심 가치</h3>${p.values.map(v => `<span class="tag">${esc(v)}</span>`).join("")}</section>
</article>`).join("");
