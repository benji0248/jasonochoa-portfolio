# Jason Ochoa

Sitio de identidad profesional de **Jason José Ochoa Gil**: neuropsicología, Terapia Cognitivo-Conductual y neurodesarrollo.

No es la web institucional de [CIPECC](https://centrocipecc.com/). Es una plataforma personal de trayectoria, formación, docencia y contacto.

## Stack

- Astro + TypeScript
- Sitio estático: sin backend, base de datos, login ni CMS
- Imágenes AVIF/WebP vía `astro:assets`
- Schema.org `Person`

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Arquitectura

| Ruta | Contenido |
| --- | --- |
| `/` | Identidad, ejes, trayectoria breve, FPV y CIPECC |
| `/sobre-mi` | Narrativa profesional y filosofía clínica |
| `/areas-de-trabajo` | Modelo integrado y programas actuales |
| `/formacion` | Credenciales con denominación exacta |
| `/docencia` | UNIMET, FPV, formación institucional y conferencias |
| `/investigacion` | Línea de investigación y sociedades científicas |
| `/contacto` | Correo, LinkedIn y CIPECC |

## Despliegue

El build genera `dist/`. Puede publicarse en Cloudflare Pages, Netlify o cualquier hosting estático.

El dominio canónico está configurado como `https://jasonochoa.com` en `astro.config.mjs` y debe actualizarse si el dominio final es otro.
