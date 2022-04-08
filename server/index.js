import express from "express";
import cors from "cors";
import postgres from "postgres";

const sql = postgres({
  // Replace with your database creds
  database: "tasktime",
});

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
