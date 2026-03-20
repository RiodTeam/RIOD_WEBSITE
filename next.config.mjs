// Set PAYLOAD=true to enable Payload CMS (admin panel, API routes, MongoDB)
// Default: disabled for fast frontend dev. Enable for deployment or CMS work.
const usePayload = process.env.PAYLOAD === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.88',
        port: '3001',
      },
      {
        protocol: 'http',
        hostname: 'rndlive.ap-south-1.elasticbeanstalk.com',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return webpackConfig
  },
}

let config = nextConfig

if (usePayload) {
  const { withPayload } = await import('@payloadcms/next/withPayload')
  config = withPayload(nextConfig)
}

export default config
