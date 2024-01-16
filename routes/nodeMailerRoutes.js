const express = require("express");
const router = express.Router();
const contactModel = require("../models/contactModel");
const { main } = require("../utils/nodemailer");
router.post("/", async (req, res) => {
  const {email , text , name} = req.body;
  contactModel.create({name , email , text});
  main(email , text , name)
  res.send("done")
});

module.exports = router