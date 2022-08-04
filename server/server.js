require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const { sequelize } = require("./db/models");

const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

const PORT = process.env.PORT || 3002;

const sessionConfig = {
    store: new FileStore(),
    key: process.env.COOKIE_NAME,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    httpOnly: true,
    cookie: { expires: 24 * 60 * 60e3 },
};

app.use(session(sessionConfig));
app.use((req, res, next) => {
    if (req.session.userId) {
        res.locals.userId = req.session.userId;
        res.locals.userName = req.session.userName;
    }
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log(`Server has been started on PORT: ${PORT}`);
        console.log("There is a connection to the database");
    } catch (error) {
        console.error("No connection to the database", error.message);
    }
});
