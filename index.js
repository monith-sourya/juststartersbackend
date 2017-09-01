const express = require('express')
const mongoose = require('mongoose')
const app = express()
const keys = require('./config/keys')

require('./models/Product')

mongoose.connect(keys.MONGO_URI)

app.get('/', (req, res) => {
    res.send({hi: 'there'})

    const Product = mongoose.model('products')
    new Product({title:'Burger', price:5}).save()

})

const PORT = process.env.PORT || 3000;
app.listen(PORT)
