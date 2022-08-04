const router = require("express").Router();
const bcrypt = require("bcrypt");

const { User } = require("../db/models");

router
    .route("/")
    .post(async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({
                where:
                    {
                        email: email,
                    }
            })

            if (!user) {
                const message = 'User not found!'
                res.json({ message });
            }

            const isValidPass = await bcrypt.compare(password, user.password)

            if (!isValidPass) {
                const message = 'Wrong password!';
                res.json({ message });
            }

            req.session.userId = user.id;
            req.session.userName = user.userName;
            const userInfo = [user.id, user.userName, user.email.toLowerCase()];
            res.json({ userInfo })

        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
