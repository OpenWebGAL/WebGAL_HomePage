const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出
  output: 'export',
  basePath: '/out',
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // 静态导出时需关闭图像优化
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig