const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    series:{type: String, required: true},
    userClass:{type: String, required: true},
    idAdmin: {type: String, required: true, minlenght: 2, maxlenght: 600},
    idPoster: {type: String, required: true, minlenght: 2, maxlenght: 600},
    schoolName: { type: String, required: true, minlenght: 2, maxlenght: 100},
    subject: {type: String, required: true, minlenght: 2, maxlenght: 50},
    poster: {type: String, required: true, minlenght: 2, maxlenght: 50},
    title: {type: String, required: true, minlenght: 2, maxlenght: 50},
    notice: {type: String, required: true, minlenght: 2, maxlenght: 550},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Schedule', scheduleSchema);