/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_PROD_URL: "https://127.0.0.1:8000/api/",
    API_PROD_URL: "https://buyapi.alibuybd.com/api/",
    // API_PROD_URL: "https://laravel.pixelstrap.net/fastkart/api/",
    PAYMENT_RETURN_URL: "http://localhost:3000",
    PAYMENT_CANCEL_URL: "http://localhost:3000/",
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "buyapi.alibuybd.com",
      },
    ],
  },
};

module.exports = nextConfig;
