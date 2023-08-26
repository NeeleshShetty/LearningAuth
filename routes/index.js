const express = require("express");

const router = express.Router();

const home_Controller = require("../controllers/home_controller");

router.get("/", home_Controller.home);

router.use("/users", require("./users"));

console.log("Router Loaded");
module.exports = router;
