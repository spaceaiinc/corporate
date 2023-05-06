/* eslint-disable no-undef */
require('dotenv').config({
  path: process.env.DOTENV_CONFIG_PATH,
})

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
  },
  async rewrites() {
    return [
      {
        source: '/memory/',
        destination: 'http://localhost:8000/',
      },
      {
        source: '/memory/signin/',
        destination: 'http://localhost:8000/signin/',
      },
    ];
  },
}