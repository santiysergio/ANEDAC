import { getCollection } from 'astro:content'

// Filtro base para obtener solo los posts públicos y listados
const getPublishedPosts = async () => {
	return (await getCollection('blog')).filter(
		(post) => post.data.listed !== false && !post.data.draft
	)
}

export const getCategories = async () => {
	// Usamos el filtro base
	const posts = await getPublishedPosts()
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}

export const getPosts = async (max?: number) => {
	return (await getPublishedPosts()) // Usamos el filtro base
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getTags = async () => {
	// Usamos el filtro base
	const posts = await getPublishedPosts()
	const tags = new Set<string>() // Especificamos el tipo para mayor seguridad

	posts.forEach((post) => {
		// ¡SOLUCIÓN! Solo intentamos acceder a las etiquetas si el array existe.
		if (post.data.tags) {
			post.data.tags.forEach((tag) => {
				tags.add(tag.toLowerCase())
			})
		}
	})

	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	// Usamos el filtro base
	const posts = await getPublishedPosts()
	const lowercaseTag = tag.toLowerCase()

	return posts.filter((post) => {
		// ¡SOLUCIÓN! Verificamos que 'tags' exista antes de usar '.some()'
		// Si no hay tags, devolvemos false para este post.
		return post.data.tags
			? post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
			: false
	})
}

export const filterPostsByCategory = async (category: string) => {
	// Usamos el filtro base
	const posts = await getPublishedPosts()
	return posts.filter((post) => post.data.category.toLowerCase() === category)
}
