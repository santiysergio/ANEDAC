const config = {
	siteUrl: 'https://www.anedac.es',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{ userAgent: '*', allow: '/' },
			{ userAgent: '*', disallow: '/admin' }
		]
	},
	changefreq: 'daily',
	priority: 0.7,
	exclude: ['/admin/*', '/private/*'],
	additionalPaths: async (config) => ['/blog/*', '/src/pages/*', '/src/content/blog/*']
}

export default config
