const {model,Schema} = require('mongoose');

const userSchema = new Schema({
    nameAndSurname:String,
    image:String,
    description:String,
    id:String
})

module.exports = model('Farmer',userSchema);