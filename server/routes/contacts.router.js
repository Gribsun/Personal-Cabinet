const router = require("express").Router();

const { Contact } = require("../db/models");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const contacts = await Contact.findAll({
                where: {
                    userId: res.locals.userId
                },
                attributes: ['id', 'name', 'gender', 'phone', 'info'],
                order: [["createdAt", "DESC"]],
            });

            res.json(contacts);

        } catch (err) {
            console.log(err);
        }
    })
    .post(async (req, res) => {
            try {
                const {name, gender, phone, info} = req.body;

                const newContact = await Contact.create({
                    name,
                    gender,
                    phone,
                    info,
                    userId: res.locals.userId
                });

                return res.status(201).json(newContact);

            } catch (err) {
                console.log(err);
            }
    });

module.exports = router;
