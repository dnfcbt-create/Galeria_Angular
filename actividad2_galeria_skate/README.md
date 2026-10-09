# Actividad 2 - Galería de imágenes con Angular

Proyecto sencillo de Angular basado en una galería de skateparks de España.

## Qué incluye

- Componente principal de galería.
- Componente independiente para cada imagen.
- Imágenes almacenadas en un array de TypeScript.
- Filtro sencillo por zona.
- Vista ampliada al pulsar una imagen.
- Diseño responsive con CSS Grid y media queries.
- Créditos y enlaces a las fotografías originales de Wikimedia Commons.

## Ejecutar en local

1. Instalar Node.js y npm.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Ejecutar:

```bash
npm install
npm start
```

4. Abrir `http://localhost:4200` en el navegador.

## Desplegar en GitHub Pages

Primero hay que crear un repositorio en GitHub y subir este proyecto.
Después, desde la carpeta del proyecto, ejecutar:

```bash
npm install
npm run build
npx ng deploy --base-href=/NOMBRE-DEL-REPOSITORIO/
```

Sustituir `NOMBRE-DEL-REPOSITORIO` por el nombre real del repositorio.

Al finalizar, GitHub Pages mostrará una URL pública. Esa URL es la que debe añadirse a la memoria de la actividad.
