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
app.get("/listVM", async (req,res) => {
    await vm.find().exec((err, results) => {
        try {
            res.send(results);
        } catch (error) {
            res.status(500).send(error);
        }
    });
})
app.patch("/editVM/:id", async (req, res) => {
    try {
        await vm.findByIdAndUpdate(req.params, res.body)
        vm.save();
        res.send({"msg": "Update successful"});
    } catch (error) {
        res.status(500).send(error);
    }
    
})
module.exports = app;