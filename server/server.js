const express = require("express");
const apiRouter = require("./routes/api");

const app = express();

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("HELLO from SERVER HOME PAGE");
});

app.use((err, req, res, next) => {
  res.send(err, "ERROR IN USERNAME/EMAIL");
});

app.listen(port, (req, res) => {
  console.log(`SERVER IS STARTED ON PORT ${port}`);
});
