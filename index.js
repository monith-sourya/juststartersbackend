const express = require('express')
const mongoose = require('mongoose')
const app = express()
const keys = require('./config/keys')

require('./models/Product')

mongoose.connect(keys.MONGO_URI)

const Product = mongoose.model('products')

app.get('/products', (req, res) => {
    var items = []

    Product.find({}).then((products) => {
        products.forEach(function(product) {
            items.push(product)
        })
        res.send({
            "Products": items
        })
    }, (e) => {
        console.log("Failed")
        res.send(400)
    })

});

const PORT = process.env.PORT || 3000;
app.listen(PORT)
