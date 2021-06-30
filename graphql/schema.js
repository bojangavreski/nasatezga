const gql = require('graphql-tag');

module.exports = gql`
type Product{
    id:ID!
    image:String!
    createdAt:String!
    title:String!
    description:String!
    username:String!
    location:String!
    category:String!
    telephone:String!
    creator:ID!
    region:String
    quantity:Int!
}
type User{
    id:ID!
    name:String!
    surname:String!
    avatar:String!
    email:String!
    token:String! 
    location:String!
    subscribed:Boolean!
    telephone:String!
}
type Region{
    regionId:ID!
    regionName: String!
    regionNameMK:String!
}
type City { 
    cityId:ID!
    name: String!
    regionId: ID!
    nameMK:String!
}
input RegisterInput{
    name:String!
    surname:String!
    email:String!
    location:String!
    telephone:String!
    password:String!
    confirmPassword:String!
}

type Query{
    getProducts:[Product]
    getProduct(pId:ID!):Product!
    getProductsByUser(username:String!):[Product]
    getProductsByCategory(category:String!):[Product]
    getUser(uId:ID!):User
    checkEmail(email:String!):String!
    getRegion(regionId:ID!):Region!
    getRegions:[Region]
    getCity(cityId:ID!):City!
    getCities:[City]
    getCitiesByRegion(regionId:ID!):[City]!
}
type Mutation{
    register(registerInput:RegisterInput!):User!
    login(email:String!, password:String!):User!
    createProduct(title:String!,description:String!,location:String!,image:String!,category:String!,region:String!,creator:String!):Product!
    deleteProduct(pId:ID!):String!
    changeAvatar(url:String!):String!
    changePassword(password:String!,confirmPassword:String!,email:String!):String!
    enterCity(cityId:ID!,name:String!,regionId:ID!,nameMK:String!):String!
    enterRegion(regionId:ID!,regionName: String!,regionNameMK:String!):String!
}
`