/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'tailwindui.com',
            'images.unsplash.com',
            'images.pexels.com',
            'links.papareact.com',
        ],
    },
};

module.exports = nextConfig;
