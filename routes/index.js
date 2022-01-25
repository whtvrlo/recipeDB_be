const router = require("express").Router();
const User = require("../models/user")

router.get("/", (req, res) => {
    const allUsers = User.findAll({
        attributes: ["id", "name", "createdAt", "updatedAt" ]

    });
    res.status(200).json({msg: "worked", data: allUsers});
});

// // create a user
// router.post("./", (req, res) => {
//     const user = User.create({
//         name: req.body.name,
//         passwordHash: req.body.password,
//     });
//     res.status(201).json({ msg: "worked"});
// });


module.exports = router;

