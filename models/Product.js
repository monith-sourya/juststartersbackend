const mongoose =  require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema ({
    title: String,
    // descr: [String],
    price: Number
    // images: [String],
    // options: [String]
})

mongoose.model('products',productSchema)
