const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose')

const schema = require('./graphql/schema.js');
const {MONGO_KEY} = require('./config.js');
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs:schema,
    resolvers,
    introspection:true,
    playground:true,
    context: ({req}) =>({req})
})

mongoose.connect(MONGO_KEY, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log("Mongo connected");
        return server.listen({port: process.env.PORT || 5001})
        .then((res) => {
            console.log(`Server is running at ${res.url}`)
        });
    }).catch(err => {
        console.log('Error happaned while reaching the database');
    })
