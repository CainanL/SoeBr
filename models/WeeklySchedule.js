const mongoose = require('mongoose');

const weeklySchedule = mongoose.Schema({
    idAdmin: { type: String, required: true, minlenght: 3, maxlenght: 600 },
    day: { type: String, required: true, minlenght: 3, maxlenght: 100 },
    weeklySchedule: { type: Array, required: true },
    series: {type: String, required: true},
    userClass: { type: String, required: true },
})

module.exports = mongoose.model("WeeklySchedule", weeklySchedule);