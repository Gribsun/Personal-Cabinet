const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models");

const saltRounds = 5;

router.route("/").post(async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const checkUserEmail = await User.findOne({
            where: {
                email: email.toLowerCase(),
            },
        });

        const checkUserName = await User.findOne({
            where: {
                userName: name,
            },
        });

        const newUser = await User.create({
            userName: name,
            email: email.toLowerCase(),
            password: hashedPassword,
        });

        req.session.userId = newUser.id;
        req.session.userName = newUser.userName;

        const userInfo = [newUser.id, newUser.name, newUser.email];
        res.json({ userInfo });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
