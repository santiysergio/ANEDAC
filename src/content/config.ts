// src/content/config.ts

import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '../data/categories' // Asegúrate de que esta ruta sea correcta

const blogCollection = defineCollection({
	type: 'content',
	schema: (
		{ image } // Usamos 'image' para el helper de imágenes de Astro
	) =>
		z.object({
			// CAMBIO: Añadimos .optional() para que la imagen no sea obligatoria
			heroImage: image().optional(),
			category: z.enum(CATEGORIES),
			description: z.string(),
			pubDate: z.date(),
			draft: z.boolean().optional(),

			// CAMBIO: Añadimos 'listed' como un booleano opcional.
			// Lo definimos aquí para que Astro lo reconozca.
			listed: z.boolean().optional(),

			// CAMBIO: Añadimos .optional() para que las etiquetas no sean obligatorias
			tags: z.array(z.string()).optional(),
			title: z.string()
		})
})

export const collections = {
	blog: blogCollection // Asegúrate de que el nombre aquí es 'blog' o 'post' según tu proyecto
}
