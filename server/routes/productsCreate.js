const express = require("express");
const router = express.Router();

const Products = require('../models/productModel')


router.route("/create").post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const origin = req.body.origin;
    const newProduct = new Products({name, price, origin});
    newProduct.save();
});


router.route("/createdProducts").get((req, res) => {
    Products.find()
        .then(foundProduct => res.json(foundProduct))
});

router.route("/:productId").get((req, res) => {
    Products.findById(req.params.productId)
        .then(foundProductId => res.json(foundProductId))
});

router.route("/:productId").patch((req, res) => {
    Products.updateOne(
        {_id: req.params.productId}, 
        { $set: {name: req.body.name, 
                 price: req.body.price,
                 origin: req.body.origin
                }
        }
    )
        .then(updatedPost => res.json(updatedPost)) 
        .catch(err => console.log(`Error happend${err}`))
})

module.exports = router;