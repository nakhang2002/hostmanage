const express = require("express")
const user = require("../models/users")
const app = express();

// create User
app.post("/postUser", async (req, res) => {
    const u = new user(req.body);
    try {
        await u.save();
        user.create(res);
        res.send({msg: "Create User successful!"})
    } catch (error) {
        res.status(500).send(error);
    }

})
app.get("/listUser", async (req,res) => {
    u = await user.find().exec((err, results) => {
        try {
            res.send(results)
        } catch (error) {
            res.status(500).send(err)
        }
    })
})
app.patch("/editUser/:id",async (req,res) => {
    try {
        await user.findByIdAndUpdate(req.params.id, req.body);
        user.save();
        res.send({msg: "update user successful"})
    } catch (error) {
        res.status(200).send()
    }
})
app.delete("/deleteUser/:id", async (req,res) => {
    try {
        await user.findByIdAndDelete(req.params.id);
        if(!user) res.status(500).send(error);
        res.send("Delete User successful")
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = app;