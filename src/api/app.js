import express from "express";
const app = express();

app.get("/", (res) => {
  res.send("Working with creattek services!");
});
app.listen(8085, () => {
  console.log("Server running!");
});
