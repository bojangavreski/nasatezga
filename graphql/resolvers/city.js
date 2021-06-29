
const City = require('../../models/City');

module.exports ={
    Query: {
        async getCity(_,{cityId}){
            const city = await City.findById({cityId});
            return city;
        },
        async getCities(){
            try{
                const cities = await City.find().sort({nameMK:1});
                return cities;
            }catch(err){
                throw new Error(err);
            }
        },
        async getCitiesByRegion(_,{regionId}){
            const cities = await City.find({regionId})
            return cities;
        }
    },
    Mutation:{
        async enterCity(_,{cityId,name,regionId,nameMK}){
            const newCity = new City({
                cityId,
                name,
                regionId,
                nameMK
            })
            const city = await newCity.save();
            return `Додаден е ${nameMK}`;
        }
    }
}
