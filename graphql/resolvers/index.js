const productResolvers = require('./product');
const userResolvers = require('./user');
const regionResolvers = require('./region');
const cityResolvers = require('./city');
const farmerResolvers = require('./farmer'); 
module.exports = {
    Query:{
        ...productResolvers.Query,
        ...userResolvers.Query,
        ...regionResolvers.Query,
        ...cityResolvers.Query,
        ...farmerResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...productResolvers.Mutation,
        ...regionResolvers.Mutation,
        ...cityResolvers.Mutation,
        ...farmerResolvers.Mutation
    }
}