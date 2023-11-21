const userModel = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const { username, profile, email, password } = req.body;
        // if (await userModel.findOne({email})) {
        //     res.json({message : "user already created"});
        //     return;
        // }
        if (profile) {
            const newUser = new userModel({ username, profile, email, password });
            await newUser.save();
            res.status(201).json(newUser);
        }
        else {
            const newUser = new userModel({ username, email, password });
            await newUser.save();
            res.status(201).json(newUser);
        }
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