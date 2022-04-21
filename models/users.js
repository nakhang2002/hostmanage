const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    fullName: {
        type: String
    },
    passWord: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    },
    status: {
        type: String
    }

})
const user = mongoose.model('user', userSchema);
module.exports = user;