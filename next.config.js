/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

// /* eslint-disable no-undef */
// require("dotenv").config({
//   path: "config/.env." + process.env.NEXT_PUBLIC_APP_ENV
// });

// module.exports = {
//   reactStrictMode: true,
//   trailingSlash: true,
//   env: {
//     NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
//     NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

//     NEXT_PUBLIC_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
//     NEXT_PUBLIC_EMAIL_PASSWORD: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
//   },
//   images: {
//     unoptimized: true,
//   },
// };