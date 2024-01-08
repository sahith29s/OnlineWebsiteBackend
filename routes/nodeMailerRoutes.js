const express = require("express");
const router = express.Router();
const { main } = require("../utils/nodemailer");
router.post("/", async (req, res) => {
  const {email , text , name} = req.body;
  main(email , text , name)
  res.send("done")
});

module.exports = router