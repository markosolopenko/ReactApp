const express = require('express');
const router = express.Router();

const Orders = require('../models/orderedProductsModel');

router.route("/order").post((req, res) => {
    const date = req.body.dateOfOrder;
    const nickname = req.body.nickname;
    const amountOrderedProducts = req.body.orderedProducts;
    const orderedProducts = req.body.cartPageSetProducts.map(product => {
        return {
            isEditable: product.isEditable, 
            id: product.id, 
            name: product.name,
            price: product.price,
            origin: product.origin, 
            createdAt: product.createdAt,
            updatedAt: product.updatedAt
        };
    });
    const newOrder = new Orders({date, nickname, amountOrderedProducts ,orderedProducts})
    newOrder.save();
});

router.route("/orderedProducts/:nickname").get((req, res) => { 
    Orders.find({nickname: req.params.nickname})
        .then(foundProduct => res.json(foundProduct))
        .catch(err => console.log("Can't get a data", err))
});


module.exports = router;