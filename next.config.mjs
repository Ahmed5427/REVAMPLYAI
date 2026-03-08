/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  // Suppress GSAP SSR warnings
  transpilePackages: ["gsap"],
};

export default nextConfig;
