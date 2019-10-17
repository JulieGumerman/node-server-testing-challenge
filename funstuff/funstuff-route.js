const express = require("express");

const stuffRoute = express.Router();

const Stuff = require("./funstuff-model");

stuffRoute.get("/", (req, res) => {
    Stuff.getStuff()
        .then(res => {
            res.status(200).json(req)
        })
        .catch(err => {
            res.status(500).json({ message: "We couldn't get your stuff..."})
        })
})

stuffRoute.post("/", (req, res) => {
    Stuff.addStuff(req.body)
        .then(res => {
            res.status(200).json(res);
        })
        .catch(err => {
            res.status(500).json({ message: "ruh-roh"})
        })
})


module.exports = stuffRoute;