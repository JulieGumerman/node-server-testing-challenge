const express = require("express");
const server = express();

server.use(express.json());

const port = 3333;


server.listen(port, () => {
    console.log("WOOHOOOO!")
})

server.get("/", (req, res) => {
    res.send("I work!!!")
})