const express = require("express");
const port = 8000;

const app = express();

//view ejs
app.set('view engine','ejs');
app.set('views', './views');

//Express Router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("Error in conecting the server");
  }

  console.log("Successfully running port : ", port);
});
