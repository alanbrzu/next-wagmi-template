/** @type {import('next').NextConfig} */
const nextConfig = {
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	webpack: config => {
		config.externals.push('pino-pretty', 'lokijs', 'encoding')
		return config
	},
}

export default nextConfig
