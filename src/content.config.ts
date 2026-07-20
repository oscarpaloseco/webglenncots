import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// CMS basado en Git: el contenido vive en /src/content y se versiona en el repo (el hub).
// Editable a mano en Markdown o conectable a un editor visual (Decap/TinaCMS) más adelante.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdoc", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.enum(["Tiroides", "Digestivo", "Autoinmunidad", "Metabólico", "Hábitos"]),
    image: z.string(),        // id de Unsplash o ruta local
    imageAlt: z.string(),
    author: z.string().default("Glenn Cots"),
    readingTime: z.string().default("5 min"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
