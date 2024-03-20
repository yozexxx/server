const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    transaction:{
        type: String,
        required: true
    },
    experience:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    imageurl:{ 
        type: String,
        required: true
    },
    mode:{
        type: String,
        required: true
    },
    subject:{  
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }},
    {
        timestamps: true,
    }
)

const roomModel = mongoose.model('rooms', roomSchema);

module.exports = roomModel;