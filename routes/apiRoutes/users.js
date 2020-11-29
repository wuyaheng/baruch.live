const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../../models/User');
const secret = require('../../config/default.json').jwtSecret;

//@route  POST api/users
//@desc   Register a user
//acccess Public

const validate = (req, res, next) => {
    try {
        if (!req.body.name) throw "Please add name!"
        if (!req.body.email) throw "Please add email!"
        if (!req.body.password) throw "Please add password!"
        if (req.body.password.length < 6) throw "Password not long enough"

        next()
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

router.post("/", validate, async (req, res) => {
    console.log(req.body)
    try {
        let user = await User.findOne({
            email: req.body.email
        }).select("email").lean()

        if (user) throw "Username already exists";

        user = await User.create(req.body);

        const token = await jwt.sign({
            data: {
                user: {
                    _id: user._id
                }
            }
        }, secret, {
            expiresIn: 360000
        })

        res.json(token)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

router.get("/", async (req, res) => {
    try {
        const response = await User.find({})
        res.json(response)
    } catch (error) {
        res.sendStatus(500)
    }
})


const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if (!user) throw new Error("No User found!")

        if (!user.checkPassword(req.body.password)) throw new Error("Invalid Password")

        req.user = user;

        next()

    } catch (error) {
        console.log(error.message)
        res.status(403).send(error.message)
    }
}
router.post("/login", login, (req, res) => {
    res.json(req.user)
})

module.exports = router;