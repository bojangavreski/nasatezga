const Farmer = require('../../models/Farmer');
const {v4:uuid4} = require("uuid");
module.exports ={
    Query: {
        async getAllFarmers(){
            try{
                const farmers = await Farmer.find().sort({nameAndSurname:1});
                return farmers;
            }catch(e){
                throw new Error(e)
            }
        }
    },
    Mutation:{
        async enterFarmer(_,{nameAndSurname,image,description}){
            const newFarmer = new Farmer({
                id: new uuid4().toString(),
                nameAndSurname,
                image,
                description
            })
            try{
                await newFarmer.save();
                return newFarmer;
            }catch(err){
                throw new Error(err);
            }
        }
    }
}