const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true, minlenght: 3, maxlenght: 30 },
    lastName: { type: String, required: true, minlenght: 3, maxlenght: 100 },
    fullName: { type: String, required: true, minlenght: 3, maxlenght: 200 },
    email: {type: String, required: true, minlenght: 6, maxlenght: 200},
    password: { type: String, required: true, minlenght: 8, maxlenght: 500 },
    admin: { type: Boolean, default: false },
    createDate: { type: Date, default: Date.now },
    phone: {type: String, default: "00000000000"},
    schoolName: {type: String, required: true, minlenght: 3, maxlenght: 50},
    series:{type: String, default: "NOT_STUDENT", minlenght: 1, maxlenght:3},
    userClass:{type: String, default: "NOT_STUDENT", minlenght: 1, maxlenght:3},
    birthDate:{type: String, required: true, minlenght: 1, maxlenght:100},
    functionUser:{type: String, required: true, minlenght: 1, maxlenght:100},    
    idAdmin:{type: String, required: true, minlenght: 1, maxlenght: 200},
    subject: {type: String, default: "NOT_A_TEACHER", minlenght: 2, maxlenght: 50},
    employeer: {type: Boolean, default: false}
})

module.exports = mongoose.model("User", userSchema);