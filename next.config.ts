import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Domaine utilisé pour les images des cartes
        port: '',
        pathname: '/**',
      },
      // Ajoutez d'autres domaines ici si vous utilisez d'autres sources d'images (ex: un CDN)
    ],
  },
};
export default nextConfig;
