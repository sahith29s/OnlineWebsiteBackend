const express = require("express");
const router = express.Router();
const { main } = require("../utils/nodemailer");
router.post("/", async (req, res) => {
  main(email , text , name);
  res.send("done");
});

module.exports = router