// Set PAYLOAD=true to enable Payload CMS (admin panel, API routes, MongoDB)
// Default: disabled for fast frontend dev. Enable for deployment or CMS work.
const usePayload = process.env.PAYLOAD === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old WordPress blog → new insights (RIOD-relevant posts)
      { source: '/blog/how-to-fast-charge-your-ev-at-home', destination: '/insights/how-to-fast-charge-your-ev-at-home', permanent: true },
      { source: '/blog/how-to-fast-charge-your-ev-at-home/', destination: '/insights/how-to-fast-charge-your-ev-at-home', permanent: true },
      { source: '/blog/riod-is-collaborating-with-cpos-to-solve-ev-charging-infrastructure-problem', destination: '/insights/riod-collaborating-with-cpos-ev-charging', permanent: true },
      { source: '/blog/riod-is-collaborating-with-cpos-to-solve-ev-charging-infrastructure-problem/', destination: '/insights/riod-collaborating-with-cpos-ev-charging', permanent: true },
      { source: '/blog/elive-energy-management-solution', destination: '/insights/elive-energy-management-solution', permanent: true },
      { source: '/blog/elive-energy-management-solution/', destination: '/insights/elive-energy-management-solution', permanent: true },
      { source: '/blog/cms-partners', destination: '/insights/cms-partners-integration', permanent: true },
      { source: '/blog/cms-partners/', destination: '/insights/cms-partners-integration', permanent: true },
      { source: '/blog/how-to-monitor-energy-consumption-across-your-hotel-chains', destination: '/insights/hotel-energy-consumption-monitoring', permanent: true },
      { source: '/blog/how-to-monitor-energy-consumption-across-your-hotel-chains/', destination: '/insights/hotel-energy-consumption-monitoring', permanent: true },
      // Old WordPress blog → rndsquare.com (non-EV posts)
      { source: '/blog/how-rd150-temperature-and-humidity-controller-drives-efficiency-in-hatchery-industry', destination: 'https://rndsquare.com/insights/how-rd150-temperature-and-humidity-controller-drives-efficiency-in-hatchery-industry', permanent: true },
      { source: '/blog/how-rd150-temperature-and-humidity-controller-drives-efficiency-in-hatchery-industry/', destination: 'https://rndsquare.com/insights/how-rd150-temperature-and-humidity-controller-drives-efficiency-in-hatchery-industry', permanent: true },
      { source: '/blog/how-climate-pro-is-helping-mushroom-farms-to-maintain-optimal-climate-conditions-for-better-yields', destination: 'https://rndsquare.com/insights/how-climate-pro-is-helping-mushroom-farms-to-maintain-optimal-climate-conditions-for-better-yields', permanent: true },
      { source: '/blog/how-climate-pro-is-helping-mushroom-farms-to-maintain-optimal-climate-conditions-for-better-yields/', destination: 'https://rndsquare.com/insights/how-climate-pro-is-helping-mushroom-farms-to-maintain-optimal-climate-conditions-for-better-yields', permanent: true },
      { source: '/blog/importance-of-temperature-monitoring-in-pharma-companies', destination: 'https://rndsquare.com/insights/importance-of-temperature-monitoring-in-pharma-companies', permanent: true },
      { source: '/blog/importance-of-temperature-monitoring-in-pharma-companies/', destination: 'https://rndsquare.com/insights/importance-of-temperature-monitoring-in-pharma-companies', permanent: true },
      { source: '/blog/monitoring-your-hatchery-know-how-temperature-humidity-and-kpi-affects-the-hatchability', destination: 'https://rndsquare.com/insights/monitoring-your-hatchery-know-how-temperature-humidity-and-kpi-affects-the-hatchability', permanent: true },
      { source: '/blog/monitoring-your-hatchery-know-how-temperature-humidity-and-kpi-affects-the-hatchability/', destination: 'https://rndsquare.com/insights/monitoring-your-hatchery-know-how-temperature-humidity-and-kpi-affects-the-hatchability', permanent: true },
      // Catch-all for /blog
      { source: '/blog', destination: '/insights', permanent: true },
    ];
  },
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
