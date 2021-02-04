const mongoose = require('mongoose');  

const orderedSchema = {
    nameOfClient: String,
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