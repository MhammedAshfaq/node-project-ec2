import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = 9000;

app.get("/api/get", (req, res) => {
  res.send({ message: "Nodejs Server" });
});

app.get("/api/user", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Successfully",
      data: [
        {
          id: 1,
          name: "Ashfaq",
          email: "example@gmail.com",
        },
        {
          id: 2,
          name: "Haani",
          email: "example1@gmail.com",
        },
        {
          id: 3,
          name: "Jomon",
          email: "example3@gmail.com",
        },
      ],
    });
  } catch (error) {
    console.log("Error", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
