const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/chatRoutes");

const createUser = async (req, res) => {
    try {
        const { username, profile, email, password } = req.body;

        if (await userModel.findOne({ email })) {
            res.status(409).json({ message: "user already created" });
            return;
        }
        if (profile) {
            const newUser = userModel.create({username , profile , email});
            res.status(201).json(newUser);
        }
        else {
        const newUser = await userModel.create({ username, email, password });
        console.log("Ater model", newUser);
        res.status(201).json(newUser);
        }
    }
    catch (error) {
        res.json(error);
    };
}

const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user && user.password == password) {
            user.password = "";
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
            console.log(token);
            res.cookie("token", token);
            res.status(200).json([user, token]);
        }
        else {
            res.status(404).json({ message: "User not found please sign up first" });
        }
    }
    catch (error) {
        console.log(error);
    };
}

const getUser = async (req, res) => {

}

const updateUser = async (req, res) => {

}

const deleteUser = async (req, res) => {

}

module.exports = { createUser, LoginUser }