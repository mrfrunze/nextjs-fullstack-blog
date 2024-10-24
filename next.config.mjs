/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // Добавляем picsum.photos как разрешённый хост
        pathname: '/**', // Разрешаем любые пути на этом хосте
      },
    ],
  },
};

export default nextConfig;
