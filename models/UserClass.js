const mongoose = require('mongoose');

const userClass = new mongoose.Schema({    
    idAdmin: {type: String, required: true, minlenght: 2, maxlenght: 600},
    schoolName: { type: String, required: true, minlenght: 2, maxlenght: 100},
    date: {type: Date, default: Date.now},
    series: {type: String, required: true},
    userClass: {type: String, required: true}
})

module.exports = mongoose.model('UserClass', userClass);