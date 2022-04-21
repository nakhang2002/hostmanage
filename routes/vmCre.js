const express = require('express')
const vm = require("../models/vm")
const app = express();

app.post("/createVM", async (req,res) => {
    m = new vm(req.body)
    try {
        await m.save()
        //vm.create(res)
        res.send(m)
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = app;