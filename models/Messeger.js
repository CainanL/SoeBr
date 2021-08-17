const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    fullNamePoster: { type: String, required: true, minlenght: 3, maxlenght: 200 },
    functionPoster: {type: String, default: "STUDENT"},
    createDate: { type: Date, default: Date.now },
    idPoster: {type: String, required: true},
    idReceiver: {type: String, required: true},
    subject: {type: String, default: 'STUDENT'}

})

module.exports = mongoose.model("Message", messageSchema);