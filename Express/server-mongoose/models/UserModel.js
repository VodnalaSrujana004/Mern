const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique:true
    },
    phoneno:{
        type: Number,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
})

const Users = mongoose.model("Users", UsersSchema)

module.exports = mongoose