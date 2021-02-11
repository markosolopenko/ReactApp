const mongoose = require('mongoose');  

const orderedSchema = {
    date: String,
    nickname: String,
    amountOrderedProducts: Object,
    orderedProducts: [
        {
            isEditable: Boolean,
            id: String, 
            name: String,
            price: String,
            origin: String,
            createdAt: String,
            updatedAt: String
        }
    ] 
}


const Orders = mongoose.model("Orders", orderedSchema);

module.exports = Orders;