/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    experimental: {
        scrollRestoration: false,
    }
}

module.exports = nextConfig
