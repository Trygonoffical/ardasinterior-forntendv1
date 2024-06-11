/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ii1.pepperfry.com'
            },
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com'
            },
        ]
    }
};

export default nextConfig;
