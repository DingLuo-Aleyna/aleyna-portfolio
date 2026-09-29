/** @type {import('next').NextConfig} */
const nextConfig = {
  // 本地圖片直接用原始檔案，避免 next/image 優化器與檔名/格式產生問題
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
