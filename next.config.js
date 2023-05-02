// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };

// module.exports = nextConfig;

/* eslint-disable no-undef */
require('dotenv').config({
  path: process.env.DOTENV_CONFIG_PATH,
})

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
  }
}