const {model, Schema} = require('mongoose');

const productSchema = new Schema({
    username:String,
    title:String,
    description:String,
    createdAt:String,
    location:String,
    telephone:String,
    image:String,
    category:String,
    creator:String,
    region:String,
    user:{
        type:Schema.Types.ObjectId,
        ref: "users"
    },
    producer:String,
    producerPhone:String,
    price:Number,
    baseQuantity:String,
    unit:String
})

module.exports = model("Product",productSchema)