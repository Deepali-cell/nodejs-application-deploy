import express from "express";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Server is working");
});
app.listen(port, () => {
  console.log("server is connected");
});
