const mongoose =  require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema ({
    title: String,
    price: Number,
    url: String,
    descr: String
    // options: [String]
})

mongoose.model('products',productSchema)
