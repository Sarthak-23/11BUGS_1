const express = require("express");
const db = require("./config/db_config");

// PORT
const PORT = process.env.PORT || 5000;

// App
const app = express();

// Listen
app.listen(PORT, () => {
  console.log("Server is up and running!");
});
