const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    idAdmin: {type: String, required: true, minlenght: 2, maxlenght: 600},
    idPoster: {type: String, required: true, minlenght: 2, maxlenght: 600},
    title: {type: String, required: true, minlenght: 2, maxlenght: 600},
    text: {type: String, default: '...',},
    date: {type: Date, default: Date.now},
    urlVideo: {type: String, default: ''},
    urlAbout: {type: String, default: ''},
    posterName: {type: String, required: true, minlenght: 2, maxlenght: 600},
    subject: {type: String, required: true, minlenght: 2, maxlenght: 600},
    userClass: {type: String, required: true},
    series: {type: String, required: true}
})

module.exports = mongoose.model('Content', contentSchema);