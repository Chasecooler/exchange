const express = require("express");
// const bodyParser = require('body-parser); ... not needed, 
const cors = require("cors");

const mongoose = require("mongoose");

require("dotenv").config();
// express server
const app = express();

const port = process.env.PORT || 5000;
// cross-origin resources sharing ... allows restricted resources requested from another domain
app.use(cors());

app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exchangesRouter = require("./routes/exchanges");

const usersRouter = require("./routes/users");

app.use("/exchanges", exchangesRouter);

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
