import express from "express";
import cors from "cors";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

console.log("PORT value", PORT);

const sql = postgres(process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  sql`SELECT * FROM tasks`.then((rows) => {
    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
