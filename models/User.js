const {model,Schema} = require('mongoose');

const userSchema = new Schema({
    name:String,
    surname:String,
    telephone:String,
    location:String,
    avatar:String,
    email:String,
    password:String,
    subscribed:Boolean,
    products:[{
          type:Schema.Types.ObjectId,
          ref: "products"
        },
      ],
})

module.exports = model('Users',userSchema);