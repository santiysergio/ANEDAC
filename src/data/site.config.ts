interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Antonio', // Site author
	title: 'ANEDAC', // Site title.
	description: 'Asociacion Estudiantil Española', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
