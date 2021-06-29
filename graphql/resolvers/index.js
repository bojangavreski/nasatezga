const productResolvers = require('./product');
const userResolvers = require('./user');
const regionResolvers = require('./region');
const cityResolvers = require('./city');
module.exports = {
    Query:{
        ...productResolvers.Query,
        ...userResolvers.Query,
        ...regionResolvers.Query,
        ...cityResolvers.Query
    },
    Mutation:{
        ...userResolvers.Mutation,
        ...productResolvers.Mutation,
        ...regionResolvers.Mutation,
        ...cityResolvers.Mutation
    }
}