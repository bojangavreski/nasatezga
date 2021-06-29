const {model, Schema} = require('mongoose');

const citySchema = new Schema({
    cityId:String,
    name:String,
    regionId:String,
    nameMK:String
})

module.exports = model("City",citySchema)