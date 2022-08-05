const router = require("express").Router();

const { Contact } = require("../db/models");
const {where, CIDR} = require("sequelize");

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
    })

router
    .route("/:id")
    .get(async (req, res) => {
        try {
            const {id} = req.params;
            const findContact = await Contact.findOne({ where: { id } });
            res.json(findContact);
        } catch (err) {
            console.log(err);
        }
    })
    .put(async (req, res) => {
        try {
            const {id} = req.params;
            const {name, gender, phone, info} = req.body;

            await Contact.update(
                { name, gender, phone, info },
                { where: { id } }
            );

            const modifiedContact = await Contact.findOne({ where: { id } });

            res.json(modifiedContact);

        } catch (err) {
            console.log(err);
        }
    })
    .delete(async (req, res) => {
        try {
            const {id} = req.params;

            await Contact.destroy({ where: { id } });
            await res.sendStatus(200);

        } catch (err) {
            console.log(err);
        }
    })

module.exports = router;
