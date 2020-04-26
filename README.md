# videollama.me

Genera todas las páginas estáticas en todos los idiomas definidos que conforman el sitio videollama.me, con gulp, 
a partir del contenido de __src__ y los deja en __document_root__ listas para servir con nginx o apache.

## Estructura de directorios

```
src/
├── assets
│   ├── browserconfig.xml
│   ├── css
│   ├── favicon.ico
│   ├── fonts
│   ├── icon.png
│   ├── img
│   ├── js
│   ├── robots.txt
│   └── webfonts
├── includes
│   ├── ayuda-body.html
│   ├── cabecera.html
│   ├── estilos-header.html
│   ├── jsbody.html
│   ├── metas-compartir.html
│   └── pie.html
├── locales
│   ├── en
│   └── es
└── plantillas
    ├── al
    ├── index.html
    ├── ${{ traduce.ayudaSlug }}$
    └── ${{ traduce.legalSlug }}$
```

Tras ejecutar la tarea por defecto de **gulp**:
```
[12:07:34] Using gulpfile ~/videollama.me/gulpfile.js
[12:07:34] Starting 'default'...
[12:07:34] Starting 'limpiar'...
[12:07:34] Finished 'limpiar' after 29 ms
[12:07:34] Starting 'copiar-assets'...
[12:07:34] Finished 'copiar-assets' after 172 ms
[12:07:34] Starting 'traducir-html'...
[12:07:34] Finished 'traducir-html' after 41 ms
[12:07:34] Starting 'copiar-idioma-es'...
[12:07:34] Finished 'copiar-idioma-es' after 14 ms
[12:07:34] Starting 'borrar-idioma-es'...
[12:07:34] Finished 'borrar-idioma-es' after 3.98 ms
[12:07:34] Finished 'default' after 266 ms

```

Tenemos todo el contenido estático generado en __document_root__
```
document_root/
├── al
├── ayuda
├── browserconfig.xml
├── css
├── en
├── favicon.ico
├── fonts
├── icon.png
├── img
├── index.html
├── js
├── legal
├── robots.txt
└── webfonts
```


