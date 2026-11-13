// Benchmark 5K — lee data/models.json y calcula comisiones, estado y clasificación.
// Formato de datos: ver README.md. values[d] = saldo de cierre de la cuenta en el día d
// (en días de liquidación, antes de retirar la comisión).
(async function () {
  const data = await (await fetch('data/models.json', { cache: 'no-cache' })).json();
  const { initialCapital: CAP, feeRate: FEE, feePeriodDays: PERIOD, durationDays: DUR } = data;

  const { t, locale: LOC, numLocale: NUM } = window.I18N;
  const money = (n, d, sign) => new Intl.NumberFormat(NUM, { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: d, maximumFractionDigits: d, useGrouping: 'always', signDisplay: sign ? 'exceptZero' : 'auto' }).format(n);
  const usd = (n, d = 0) => money(n, d, false);
  const signed = (n, d = 0) => money(n, d, true);
  const pct = n => new Intl.NumberFormat(NUM, { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 1, signDisplay: 'exceptZero' }).format(n / 100);
  const date = (iso, opts) => new Date(iso + 'T00:00:00').toLocaleDateString(LOC, opts);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // --- Cálculo por modelo -------------------------------------------------
  const models = data.models.map((m, i) => {
    let hwm = CAP, fees = 0, peak = CAP, maxDd = 0, out = false;
    const net = []; // valor tras comisiones, por día
    for (let d = 0; d < m.values.length && d <= DUR; d++) {
      let v = m.values[d];
      if (v <= 0) { net.push(v); out = true; break; }        // capital agotado: eliminado
      if (d > 0 && (d % PERIOD === 0 || d === DUR) && v > hwm) { // liquidación con marca de agua
        const fee = FEE * (v - hwm);
        fees += fee; v -= fee; hwm = v;
      }
      net.push(v);
      peak = Math.max(peak, v);
      maxDd = Math.max(maxDd, (peak - v) / peak);
    }
    const day = net.length - 1, value = net[day];
    if (out) maxDd = 1;
    return {
      ...m, net, day, value, fees, maxDd,
      pnl: value - CAP,
      status: out ? 'out' : day >= DUR ? 'done' : 'live',
      color: `var(--series-${(i % 8) + 1})`,
      visible: true,
    };
  });
  const ranked = [...models].sort((a, b) => b.value - a.value);

  // --- Aviso de demo y resumen --------------------------------------------
  document.getElementById('demo-banner').hidden = !data.demo;
  const best = ranked[0];
  const totalFees = models.reduce((s, m) => s + m.fees, 0);
  const totalLoss = models.reduce((s, m) => s + Math.min(0, m.pnl), 0);
  const live = models.filter(m => m.status === 'live').length;
  const outN = models.filter(m => m.status === 'out').length;
  document.getElementById('tiles').innerHTML = [
    [t('tLive'), live, t('tLiveSub', { n: models.length, o: outN })],
    [t('tLeader'), best ? esc(best.name) : '—', best ? `<span dir="ltr">${signed(best.pnl)} (${pct(best.pnl / CAP * 100)})</span>` : ''],
    [t('tFees'), usd(totalFees), t('tFeesSub')],
    [t('tLoss'), usd(Math.abs(totalLoss)), t('tLossSub')],
  ].map(([l, v, s]) => `<div class="tile"><div class="label">${l}</div><div class="value">${v}</div><div class="sub">${s}</div></div>`).join('');

  // --- Tabla ---------------------------------------------------------------
  const STATUS = { live: t('live'), done: t('done'), out: t('out') };
  document.getElementById('updated').textContent =
    t('updated', { date: date(data.updated, { day: 'numeric', month: 'long', year: 'numeric' }) });
  document.getElementById('rows').innerHTML = ranked.map((m, i) => {
    const cls = m.pnl > 0 ? 'up' : m.pnl < 0 ? 'down' : '';
    const arrow = m.pnl > 0 ? '▲' : m.pnl < 0 ? '▼' : '';
    return `<tr>
      <td>${i + 1}</td>
      <td><span class="name"><i style="background:${m.color}"></i>${esc(m.name)}</span><span class="company">${esc(m.company)} · ${t('start')} ${date(m.startDate)}</span></td>
      <td><span class="badge ${m.status === 'out' ? 'out' : ''}">${STATUS[m.status]}</span></td>
      <td>${m.day} / ${DUR}</td>
      <td dir="ltr">${usd(m.value, 2)}</td>
      <td><span class="${cls}">${arrow}</span> ${signed(m.pnl, 2)}</td>
      <td dir="ltr">${pct(m.pnl / CAP * 100)}</td>
      <td dir="ltr">${usd(m.fees, 2)}</td>
      <td dir="ltr">${pct(-m.maxDd * 100)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="9" style="text-align:center">${t('empty')}</td></tr>`;

  // --- Leyenda (activa/desactiva series) ----------------------------------
  const legend = document.getElementById('legend');
  legend.innerHTML = models.map((m, i) =>
    `<button type="button" data-i="${i}" aria-pressed="true"><i style="background:${m.color}"></i>${esc(m.name)}</button>`).join('');
  legend.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const m = models[+b.dataset.i];
    m.visible = !m.visible;
    b.setAttribute('aria-pressed', m.visible);
    draw();
  });

  // --- Gráfico -------------------------------------------------------------
  const chart = document.getElementById('chart');
  const tip = document.getElementById('tooltip');
  const NS = 'http://www.w3.org/2000/svg';
  let geo = null;

  function niceStep(range, target) {
    const raw = range / target, mag = 10 ** Math.floor(Math.log10(raw));
    return [1, 2, 2.5, 5, 10].map(k => k * mag).find(s => s >= raw);
  }

  function draw() {
    chart.querySelector('svg')?.remove();
    const W = Math.max(300, chart.clientWidth), H = Math.round(Math.min(420, Math.max(260, W * 0.45)));
    const M = { t: 10, r: 14, b: 30, l: 58 };
    const shown = models.filter(m => m.visible);
    const all = shown.flatMap(m => m.net).concat(CAP);
    let lo = Math.min(...all), hi = Math.max(...all);
    const step = niceStep((hi - lo) || 1000, 5);
    lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step;
    const x = d => M.l + (d / DUR) * (W - M.l - M.r);
    const y = v => M.t + (1 - (v - lo) / (hi - lo)) * (H - M.t - M.b);

    let s = '';
    for (let v = lo; v <= hi + 1e-6; v += step)
      s += `<line x1="${M.l}" x2="${W - M.r}" y1="${y(v)}" y2="${y(v)}" stroke="var(--grid)"/>` +
           `<text x="${M.l - 8}" y="${y(v) + 4}" text-anchor="end">${usd(v)}</text>`;
    const xt = W < 520 ? [0, 90, 180, 270, 365] : [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 365];
    xt.forEach(d => { s += `<text x="${x(d)}" y="${H - 10}" text-anchor="${d === 365 ? 'end' : d === 0 ? 'start' : 'middle'}">${d === 0 ? t('day0') : d}</text>`; });
    s += `<line x1="${M.l}" x2="${W - M.r}" y1="${y(CAP)}" y2="${y(CAP)}" stroke="var(--text-muted)" stroke-dasharray="4 4"/>`;
    shown.forEach(m => {
      const pts = m.net.map((v, d) => `${x(d).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
      s += `<polyline points="${pts}" fill="none" stroke="${m.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
      const end = m.status === 'out'
        ? `<path d="M-4,-4 L4,4 M-4,4 L4,-4" stroke="${m.color}" stroke-width="2.5" stroke-linecap="round" transform="translate(${x(m.day)},${y(m.value)})"/>`
        : `<circle cx="${x(m.day)}" cy="${y(m.value)}" r="4" fill="${m.color}" stroke="var(--surface-1)" stroke-width="2"/>`;
      s += end;
    });
    s += `<g id="hover" style="display:none"><line id="cross" y1="${M.t}" y2="${H - M.b}" stroke="var(--text-muted)"/><g id="dots"></g></g>`;

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', t('chartAria'));
    svg.innerHTML = s;
    chart.prepend(svg);
    geo = { W, H, M, x, y, shown, svg };
    svg.addEventListener('pointermove', hover);
    svg.addEventListener('pointerleave', () => { tip.style.display = 'none'; svg.querySelector('#hover').style.display = 'none'; });
  }

  function hover(e) {
    const { W, M, x, y, shown, svg } = geo;
    const r = svg.getBoundingClientRect();
    const px = (e.clientX - r.left) * (W / r.width);
    const maxDay = Math.max(0, ...shown.map(m => m.day));
    const d = Math.min(maxDay, Math.max(0, Math.round((px - M.l) / (W - M.l - M.r) * DUR)));
    const rows = shown.filter(m => d <= m.day).sort((a, b) => b.net[d] - a.net[d]);
    if (!rows.length) return;
    svg.querySelector('#hover').style.display = '';
    const cross = svg.querySelector('#cross');
    cross.setAttribute('x1', x(d)); cross.setAttribute('x2', x(d));
    svg.querySelector('#dots').innerHTML = rows.map(m =>
      `<circle cx="${x(d)}" cy="${y(m.net[d])}" r="4" fill="${m.color}" stroke="var(--surface-1)" stroke-width="2"/>`).join('');
    tip.innerHTML = `<div class="t">${t('tipDay', { d })}${d > 0 && (d % PERIOD === 0 || d === DUR) ? ' · ' + t('tipFee') : ''}</div>` +
      rows.map(m => `<div class="row"><i style="background:${m.color}"></i>${esc(m.name)}<b>${usd(m.net[d])}</b></div>`).join('');
    tip.style.display = 'block';
    const cx = x(d) * (r.width / W), tw = tip.offsetWidth;
    tip.style.left = (cx + 14 + tw > r.width ? Math.max(0, cx - tw - 14) : cx + 14) + 'px';
    tip.style.top = '8px';
  }

  draw();
  let timer; window.addEventListener("resize", () => { clearTimeout(timer); timer = setTimeout(draw, 120); });
})();
