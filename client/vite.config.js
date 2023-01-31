export default {
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  cacheDir: "../node_modules/.vite",
};
