const mongoose = require('mongoose')
const Schema = mongoose.Schema
const runSchema = new Schema({
    date:
    {
        type: Date,
        required: true
    },

    distance: {
        type: Number,
        required: true
    },

    speed: {
        type: Number,  
        required: true
    },


    
}, {timestamps: true})

module.exports = mongoose.model('Run', runSchema)
