/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages 部署：導出純靜態網站
  output: 'export',
  // 網站會放在 https://dingluo-aleyna.github.io/aleyna-portfolio/ 這個子路徑下
  basePath: '/aleyna-portfolio',
  // 本地圖片直接用原始檔案，避免 next/image 優化器與檔名/格式產生問題
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
