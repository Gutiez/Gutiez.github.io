# Gutiez.github.io
Página web de Felipe Gútiez Velasco

## Benchmark 5K

Sitio estático en `benchmark/`: cada modelo de IA invierte 5.000 $ durante un año.

- `benchmark/index.html`: clasificación y gráfico. `benchmark/normas.html`: normas.
- `benchmark/data/models.json`: datos. Por cada modelo, `startDate` y `values`, donde
  `values[d]` es el saldo de cierre de la cuenta en el día `d` (el día 0 son 5.000).
  En los días de liquidación (30, 60 … 360 y 365) se anota el saldo antes de retirar la
  comisión; el sitio calcula la comisión del 5 % con marca de agua. Un valor ≤ 0 elimina al modelo.
- `"demo": true` muestra el aviso de datos de ejemplo. Los datos actuales son ficticios y se
  generan con `node tools/generate-demo.js`.
