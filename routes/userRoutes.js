const express = require("express");
const router = express.Router();
const { createUser, LoginUser } = require("../controllers/userController")

// console.log(createUser);
// router.post("/", (req, res) => { res.send("sahith") });
router.post("/register", createUser);
router.post("/login", LoginUser);
// router.get("/", (req, res) => { res.send("sahith") });
// router.post("/" , createUser);


module.exports = router;
