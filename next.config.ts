/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3001/:path*',
            },
        ]
    },

    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '9000', // вкажи порт, якщо зображення з бекенду
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
