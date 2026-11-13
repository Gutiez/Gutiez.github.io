// Genera benchmark/data/models.json con DATOS DE EJEMPLO (no son resultados reales).
// Uso: node tools/generate-demo.js [fecha-de-hoy AAAA-MM-DD]
const fs = require('fs');
const path = require('path');

const CAPITAL = 5000, FEE = 0.05, PERIOD = 30, DURATION = 365;
const today = new Date((process.argv[2] || new Date().toISOString().slice(0, 10)) + 'T00:00:00Z');

function rng(seed) { // mulberry32
  return () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const gauss = r => Math.sqrt(-2 * Math.log(r() || 1e-9)) * Math.cos(2 * Math.PI * r());

const specs = [
  { id: 'alfa',    name: 'Modelo Alfa',    company: 'Empresa A', startDate: '2025-11-03', drift: 0.0011,  vol: 0.014, seed: 11 },
  { id: 'beta',    name: 'Modelo Beta',    company: 'Empresa B', startDate: '2026-01-12', drift: 0.0004,  vol: 0.022, seed: 23 },
  { id: 'gamma',   name: 'Modelo Gamma',   company: 'Empresa C', startDate: '2026-02-02', drift: -0.0006, vol: 0.016, seed: 37 },
  { id: 'delta',   name: 'Modelo Delta',   company: 'Empresa D', startDate: '2026-03-16', drift: -0.004,  vol: 0.085, seed: 41, gapBelow: 900 },
  { id: 'epsilon', name: 'Modelo Épsilon', company: 'Empresa E', startDate: '2026-05-04', drift: 0.0016,  vol: 0.028, seed: 59 },
  { id: 'zeta',    name: 'Modelo Zeta',    company: 'Empresa F', startDate: '2026-08-10', drift: 0.0002,  vol: 0.009, seed: 67 },
];

const models = specs.map(s => {
  const r = rng(s.seed);
  const days = Math.min(DURATION, Math.floor((today - new Date(s.startDate + 'T00:00:00Z')) / 864e5));
  const values = [CAPITAL];
  let v = CAPITAL, hwm = CAPITAL;
  for (let d = 1; d <= days; d++) {
    v = v * (1 + s.drift + s.vol * gauss(r));
    // Ejemplo de posición apalancada que abre con hueco y deja la cuenta en negativo.
    if (s.gapBelow && v < s.gapBelow) v = -Math.round(r() * 400);
    if (v <= 0) { values.push(Math.round(v * 100) / 100); break; } // capital agotado
    values.push(Math.round(v * 100) / 100);
    // Tras el cierre de un día de liquidación, la comisión sale de la cuenta.
    if ((d % PERIOD === 0 || d === DURATION) && v > hwm) { v -= FEE * (v - hwm); hwm = v; }
  }
  return { id: s.id, name: s.name, company: s.company, startDate: s.startDate, values };
});

const out = {
  demo: true,
  updated: today.toISOString().slice(0, 10),
  initialCapital: CAPITAL, feeRate: FEE, feePeriodDays: PERIOD, durationDays: DURATION,
  models,
};
const file = path.join(__dirname, '..', 'benchmark', 'data', 'models.json');
fs.writeFileSync(file, JSON.stringify(out));
console.log(models.map(m => `${m.name}: ${m.values.length - 1} días, último ${m.values.at(-1)}`).join('\n'));
