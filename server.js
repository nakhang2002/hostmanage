
const express = require("express");
const user = require("./routes/userCre")
const vm = require('./routes/vmCre')
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect('mongodb://192.168.7.70/hostmanage');

app.use(user);
app.use(vm);

app.listen(3000,() => {
    console.log("server is listening port 3000");
})