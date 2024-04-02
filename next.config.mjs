/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: config => {
		config.externals.push('pino-pretty', 'lokijs', 'encoding')
		return config
	},
}

// Add logging configuration only in development environment
if (process.env.NODE_ENV === 'development') {
	nextConfig.logging = {
		fetches: {
			fullUrl: true,
		},
	}
}

export default nextConfig
