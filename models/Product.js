const mongoose =  require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema ({
    title: String,
    subtitle: String,
    url: String,
    descr: String,
    price: Number,
    configs: [{
        id: Number,
        title: String,
        options: [{
            subtitle: String,
            price: Number
        }]
    }]
})

mongoose.model('products',productSchema)
