const {model, Schema} = require('mongoose');

const regionSchema = new Schema({
    regionId:String,
    regionName:String,
    regionNameMK:String
})

module.exports = model("Region",regionSchema)