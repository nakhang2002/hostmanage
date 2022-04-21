// 1. require mongoose

const { default: mongoose } = require("mongoose");

// 2. Schema
const vmSchema = new mongoose.Schema({
    ip: String,
    hostname: String,
    unix: String,
    stat: String,
    hosted: String,
    os: String,
    cpu: String,
    Ram: String,
    disk: String,
    system: String
})
// 3. create model
const vm = mongoose.model('vm', vmSchema)
// 5. CRUD
/* user.create(
    {ip: "192.168.2.62", hostname: "z-proxy1", unix: "linux", stat: "Alive", hosted: "192.168.65.168", os: "redhat 6.5", cup: "8", Ram: "24", disk: "500", system: "mail"},
    {ip: "192.168.2.57", hostname: "z-ldap1", unix: "linux", stat: "Alive", hosted: "192.168.65.245", os: "redhat 6.5", cup: "16", Ram: "16", disk: "500", system: "mail"},
    {ip: "192.168.2.58", hostname: "z-ldap1", unix: "linux", stat: "Alive", hosted: "192.168.65.169", os: "redhat 6.5", cup: "16", Ram: "16", disk: "500", system: "mail"}
) */
/* user.find().exec((err, users) => {
    console.log(users);
}) */
// export module
module.exports = vm;