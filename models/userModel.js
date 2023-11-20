const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    profile: { type: String , default : "https://builtprefab.com/wp-content/uploads/2019/01/cropped-blank-profile-picture-973460_960_720-300x300.png" },
    
},{timestamps : true})

module.exports = mongoose.model("User" , userSchema);