const mongoose = require("mongoose")

let RegisterNxtTrendzUser = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    , location: {
        type: String,
        required: true
    }
})

module.exports =mongoose.model('RegisterNxtTrendzUser',RegisterNxtTrendzUser)