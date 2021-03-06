const express = require('express')
const mongoose = require('mongoose')
const app = express()
const keys = require('./config/keys')
const ObjectId = require('mongodb').ObjectID

require('./models/Product')

mongoose.connect(keys.MONGO_URI)

const Product = mongoose.model('products')

var products =[
    {
        title: "Portobello Burger",
        subtitle: "Juicy, Fresh Steak",
        url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
        descr: "A quarter pound flattened piece of meat typically a beef mixture that has been shaped into a circle and covered with a slice of cheese. Along with lettuce, tomato, ketchup and mustard. All in between two circular shaped buns.",
        price: 40,
        configs: [{
            id: 0,
            title: "Choose your Serving",
            options: [{
                subtitle: "For 1",
                price: "0"
            }, {
                subtitle: "For 2",
                price: "10"
            }]
        }, {
            id: 1,
            title: "Choose your Patty",
            options: [{
                subtitle: "Single",
                price: "0"
            }, {
                subtitle: "Double Up",
                price: "5"
            }]
        }, {
            id: 2,
            title: "Add a Side",
            options: [{
                subtitle: "No Thanks",
                price: "0"
            }, {
                subtitle: "Fries",
                price: "5"
            }, {
                subtitle: "Onion Rings",
                price: "10"
            }, {
                subtitle: "Chicken Popcorn",
                price: "15"
            }]
    }]
},
 {
    title: "Cinnabon",
    subtitle: "Smoothe, Rich Cheesecake",
    url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
    descr: "Freshly made, Lip-smacking, Melt-in-your-mouth, Easy-to-prepare, Chocolate-coated, Chocolate-draped, Fantasy, Scrumptious, Palatable, Succulent and Toothsome",
    price: 20,
    configs: [{
        id: 0,
        title: "How many cupcakes?",
        options: [{
            subtitle: "For 1",
            price: "0"
        }, {
            subtitle: "For 2",
            price: "20"
        }, {
            subtitle: "For 4",
            price: "35"
        }]
    }, {
        id: 1,
        title: "Choose your Frosting",
        options: [{
            subtitle: "Vanilla",
            price: "0"
        }, {
            subtitle: "Chocolate",
            price: "0"
        }, {
            subtitle: "Double Coco",
            price: "5"
        }]
    }, {
        id: 2,
        title: "Add a Side",
        options: [{
            subtitle: "No Thanks",
            price: "0"
        }, {
            subtitle: "Coffee",
            price: "5"
        }]
    }]
},
 {
    title: "Garden Salad",
    subtitle: "Fresh, Healthy",
    url: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb",
    descr: "Freshly made, Lip-smacking, Melt-in-your-mouth, Easy-to-prepare, Chocolate-coated, Chocolate-draped, Fantasy, Scrumptious, Palatable, Succulent and Toothsome",
    price: 35,
    configs: [{
        id: 0,
        title: "Pick your Serving",
        options: [{
            subtitle: "For 1",
            price: "0"
        }, {
            subtitle: "For 2",
            price: "35"
        }, {
            subtitle: "For 4",
            price: "60"
        }]
    }, {
        id: 1,
        title: "Choose your Dressing",
        options: [{
            subtitle: "Caesar",
            price: "0"
        }, {
            subtitle: "Kale",
            price: "0"
        }, {
            subtitle: "BBQ",
            price: "0"
        }]
    }, {
        id: 2,
        title: "Add a Meat",
        options: [{
            subtitle: "No Thanks",
            price: "0"
        }, {
            subtitle: "Chicken",
            price: "5"
        }, {
            subtitle: "Salame",
            price: "5"
        }, {
            subtitle: "Ham",
            price: "5"
        }]
    }]
},
    {
       title: "Pancake",
       subtitle: "Smoothe, Rich Cheesecake",
       url: "https://images.pexels.com/photos/8279/muffin.jpg?w=1260&h=750&auto=compress&cs=tinysrgb",
       descr: "Freshly made, Lip-smacking, Melt-in-your-mouth, Easy-to-prepare, Chocolate-coated, Chocolate-draped, Fantasy, Scrumptious, Palatable, Succulent and Toothsome",
       price: 20,
       configs: [{
           id: 0,
           title: "How many cupcakes?",
           options: [{
               subtitle: "For 1",
               price: "0"
           }, {
               subtitle: "For 2",
               price: "20"
           }, {
               subtitle: "For 4",
               price: "35"
           }]
       }, {
           id: 1,
           title: "Choose your Frosting",
           options: [{
               subtitle: "Vanilla",
               price: "0"
           }, {
               subtitle: "Chocolate",
               price: "0"
           }, {
               subtitle: "Double Coco",
               price: "5"
           }]
       }, {
           id: 2,
           title: "Add a Side",
           options: [{
               subtitle: "No Thanks",
               price: "0"
           }, {
               subtitle: "Coffee",
               price: "5"
           }]
       }]
   }]

app.get('/db/products/load', (req, res) => {
    products.map((product) => {
        new Product(product).save().then(() => res.send(product))
    })
})

app.get('/db/products', (req, res) => {
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

app.get('/db/products/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectId.isValid(id)){
        return res.status(404).send()
    }

    Product.findById(id).then((product) => {
        if (!product){
            return res.status(404).send()
        }
        res.send({product})
    }).catch((e) => {
        res.status(400).send()
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT)
console.log("Started backend server on port", PORT)
