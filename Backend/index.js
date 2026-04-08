const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8081;
const client = require("../Backend/src/db/client");

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.use("/api", require("./src/api"));

app.get("/", (req, res) => {
  res.send("GameStarter API is running");
});

app.get("/health", (req, res) => {
  res.status(200).send({ status: "OK" });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({
    error: "Internal server error",
  });
});

async function startServer() {
  try {
    await client.connect();
    console.log("DB connected");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

startServer();