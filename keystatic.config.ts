import { config, collection, fields } from '@keystatic/core';

// Modo github: Keystatic guarda con el token que inyecta el muro de acceso
// (src/middleware.ts) tras validar al cliente por email + contraseña.
export default config({
  storage:
    import.meta.env.DEV
      ? { kind: 'local' }
      : { kind: 'github', repo: { owner: 'oscarpaloseco', name: 'webglenncots' } },
  ui: { brand: { name: 'Glenn Cots' } },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Título', validation: { isRequired: true } } }),
        excerpt: fields.text({ label: 'Extracto', multiline: true }),
        date: fields.date({ label: 'Fecha', validation: { isRequired: true } }),
        category: fields.select({
          label: 'Categoría',
          options: [
            { label: 'Tiroides', value: 'Tiroides' },
            { label: 'Digestivo', value: 'Digestivo' },
            { label: 'Autoinmunidad', value: 'Autoinmunidad' },
            { label: 'Metabólico', value: 'Metabólico' },
            { label: 'Hábitos', value: 'Hábitos' },
          ],
          defaultValue: 'Tiroides',
        }),
        image: fields.text({ label: 'Imagen (id de Unsplash o ruta)' }),
        imageAlt: fields.text({ label: 'Texto alternativo de la imagen' }),
        author: fields.text({ label: 'Autor', defaultValue: 'Glenn Cots' }),
        readingTime: fields.text({ label: 'Tiempo de lectura', defaultValue: '5 min' }),
        draft: fields.checkbox({ label: 'Borrador (no publicar)', defaultValue: false }),
        content: fields.markdoc({ label: 'Contenido' }),
      },
    }),
  },
});
