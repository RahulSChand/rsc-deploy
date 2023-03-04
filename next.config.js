/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'


const nextConfig = {
  assetPrefix: isProd ? '/rsc-pages/' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

//ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f rsc-pages -N ""