/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3001/:path*', // проксі на бекенд
            },
        ]
    },
}

export default nextConfig
