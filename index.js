const express = require("express");
const port = 8000;

const app = express();

//Express Router
app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in conecting the server");
  }

  console.log("Successfully running port : ", port);
});
