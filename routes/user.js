const router = require("express").Router();

const User = require("../models/user");

// create a user
router.post("./", (req, res) => {
    const user = User.create({
        name: req.body.name,
        passwordHash: req.body.password,
    });
    res.status(201).json({ msg: "worked"});
});
