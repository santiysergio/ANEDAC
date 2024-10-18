import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream, mkdirSync } from 'fs'
import path from 'path'

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname: 'https://anedac.es' })

	sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
	sitemap.write({ url: '/about', changefreq: 'weekly', priority: 0.8 })
	sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 })

	sitemap.end()

	const publicDir = path.join(process.cwd(), 'public')
	mkdirSync(publicDir, { recursive: true })
	const sitemapData = await streamToPromise(sitemap)
	createWriteStream(`${publicDir}/sitemap.xml`).write(sitemapData)
}

generateSitemap().catch(console.error)
