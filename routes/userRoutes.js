const express = require("express");
const router = express.Router();
const { createUser, LoginUser } = require("../controllers/userController")

router.post("/register", createUser);
router.post("/login", LoginUser);


module.exports = router;
