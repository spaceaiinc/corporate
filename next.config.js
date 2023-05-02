// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// };

// module.exports = nextConfig;

/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: process.env.DOTENV_CONFIG_PATH,
})

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
  }
}