const userModel = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new userModel({ username, email, password })
        await newUser.save();
        res.json(newUser)
    }
    catch (error) {
        res.json({ message: "something went wrong" });
    };
}
const getUser = async (req, res) => {

}

const updateUser = async (req, res) => {
    
}

const deleteUser = async (req, res) => {

}

module.exports = { createUser }