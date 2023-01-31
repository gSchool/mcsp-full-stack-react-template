import dotenv from "dotenv";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname });

export default {
  server: {
    proxy: {
      "/api": `http://localhost:${process.env.PORT}`,
    },
  },
  cacheDir: "../node_modules/.vite",
};
