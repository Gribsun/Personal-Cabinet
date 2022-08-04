const router = require("express").Router();

const { Contact } = require("../db/models");

router
    .route("/")
    .get(async (req, res) => {
        try {
            const contacts = await Contact.findAll({
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
                    info
                });

                return res.status(201).json(newContact);

            } catch (err) {
                console.log(err);
            }
    });

module.exports = router;
