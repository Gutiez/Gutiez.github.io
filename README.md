# Gutiez.github.io
Página web de Felipe Gútiez Velasco

## Benchmark 5K

Sitio estático en `benchmark/`: cada modelo de IA invierte 5.000 $ durante un año.

- `benchmark/index.html`: clasificación y gráfico. `benchmark/normas.html`: normas.
- Idiomas: español, inglés, chino y árabe. Los textos del sitio están en `benchmark/i18n.js`
  y las normas en `benchmark/rules.js`. Se elige con el selector o con `?lang=es|en|zh|ar`.
- `benchmark/data/models.json`: datos. Por cada modelo, `startDate` y `values`, donde
  `values[d]` es el saldo de cierre de la cuenta en el día `d` (el día 0 son 5.000).
  La comisión del 5 % (con marca de agua, días 30, 60 … 360 y 365) se factura a la empresa y no
  sale de la cuenta: el sitio la calcula y publica el valor neto (cuenta − comisiones facturadas).
  Un saldo ≤ 0 elimina al modelo. `updated` es la fecha y hora de la última lectura (cada 3 horas).
- `"demo": true` muestra el aviso de datos de ejemplo. Los datos actuales son ficticios y se
  generan con `node tools/generate-demo.js`.
