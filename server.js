
const express = require("express");
const user = require("./routes/userCre")
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://192.168.7.70/hostmanage');

app.use(user);

app.listen(3000,() => {
    console.log("server is listening port 3000");
})