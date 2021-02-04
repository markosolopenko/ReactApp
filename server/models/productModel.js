const mongoose = require('mongoose');  

const productSchema = {
    name: String,
    price: String,
    origin: String,
}

const Product = mongoose.model("Products", productSchema);

module.exports = Product;