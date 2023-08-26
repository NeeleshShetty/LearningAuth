const express = require("express");

const router = express.Router();

const user_Controller = require("../controllers/users_controllers");
const posts_Controller = require("../controllers/posts_controllers");



router.get('/users', user_Controller.users);
router.get('/posts', posts_Controller.posts);


module.exports = router;