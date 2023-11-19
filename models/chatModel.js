const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    you: { type: Boolean, required: true },
    name: { type: string },
    message: { type: string, required: true }
},
    { timeStamps: true }
)




const chatModel = mongoose.model("chat", chatSchema)