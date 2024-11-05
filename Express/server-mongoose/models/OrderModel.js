const mongoose = require('mongoose')

const OrdersSchema = new mongoose.Schema({
    userid: {
        type: Number,
        required: true
    },
    orderdate:{
        type: Date,
        required: true,
    },
    phoneno:{
        type: Number,
        required: true,
    },
    productid:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    shippingaddress:{
        type: String,
        required: true
    },
})

const Users = mongoose.model("Orders", OrdersSchema)

module.exports = mongoose