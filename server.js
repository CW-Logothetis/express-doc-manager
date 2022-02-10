const cors = require("cors");
const express = require("express");
const app = express();

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let PORT = 8080;
app.listen(PORT, () => {
  console.log(`Running at localhost:${PORT}`);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})