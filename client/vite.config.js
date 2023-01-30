import dotenv from "dotenv";

dotenv.config({ path: "../server" });

export default {
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
