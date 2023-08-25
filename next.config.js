/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  module : true,
  images: {
		domains: ['cdn.sanity.io']
	}
}

module.exports = nextConfig
