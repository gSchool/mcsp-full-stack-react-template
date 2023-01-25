import express from "express";
import cors from "cors";
import postgres from "postgres";
// import dotenv from "dotenv";

// dotenv.config();

const sql = postgres(process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  sql`SELECT * FROM tasks`.then((rows) => {
    res.send(rows);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
