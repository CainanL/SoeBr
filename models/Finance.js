const mongoose = require('mongoose');

const financeSchema = mongoose.Schema({
    fullName: { type: String, required: true, minlenght: 3, maxlenght: 200 },
    createDate: { type: Date, default: Date.now },
    idAdmin: {type: String, required: true},
    value: {type: Number, required: true},
    description: {type: String, required: true},
    inOut: {type: String, required: true}
})

module.exports = mongoose.model("Finance", financeSchema);