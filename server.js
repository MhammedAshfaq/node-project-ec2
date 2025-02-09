import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 9000;

app.get("/api/get", (req, res) => {
  res.send({ message: "Nodejs Server" });
});

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
