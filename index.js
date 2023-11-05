const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

const corOption = {
  origin: "http://localhost:3000",
};

// middleware
app.use(express.json());
app.use(cors(corOption));

// connect MongoDb

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// route
app.get("/", (req, res) => {
  res.status(201).json({ message: "Connect to Backend!" });
});
