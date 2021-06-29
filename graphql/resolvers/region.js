
const Region = require('../../models/Region');

module.exports ={
    Query: {
        async getRegion(_,{regionId}){
            const region = await Region.findOne({regionId});
            return region;
        }
    },
    Mutation:{
        async enterRegion(_,{regionId,regionName,regionNameMK}){
            const newRegion = new Region({
                regionId,
                regionName,
                regionNameMK
            })
            const region = await newRegion.save();
            return `Додаден е ${regionNameMK}`;
        }
    }
}