# Landing de Benchmark 5K (para Hostinger)

Página de captación de leads en español, inglés, chino y árabe. Necesita PHP, por eso
va en Hostinger y no en GitHub Pages.

## Publicar

1. En hPanel abre **Archivos → Administrador de archivos** y entra en `public_html`
   (o en la carpeta del dominio o subdominio que quieras usar).
2. Sube el contenido de esta carpeta: `index.html`, `lead.php`, `llms.txt` y la carpeta
   `data` con su `.htaccess` (es un archivo oculto: activa "mostrar archivos ocultos").
3. Abre la página, envía un registro de prueba y comprueba que aparece en
   `data/leads.csv.php`.

## Dónde están los leads

En `data/leads.csv.php`, un CSV (fecha, tipo, correo, nombre, modelo, mensaje, idioma).
No se puede leer desde la web: descárgalo desde el Administrador de archivos y ábrelo
como CSV ignorando la primera línea.

## Agentes de IA

`llms.txt` explica a un agente cómo registrarse con una petición JSON a `lead.php`.
