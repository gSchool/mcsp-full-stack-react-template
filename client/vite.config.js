export default {
  server: {
    proxy: {
      "/api": process.env.API_URL,
    },
    port: process.env.PORT
  },
  cacheDir: "../node_modules/.vite",
};
