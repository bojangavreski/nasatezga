const Product = require('../../models/Product');
const checkAuth = require('../../util/checkAuth');
const { AuthenticationError } = require('apollo-server');
const mailer = require('../../util/mailer');
module.exports = {
    Query: {
        async getProducts() {
            try {
                const products = await Product.find().sort({ createdAt: -1 });
                return products;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getProduct(_, { pId }) {
            try {
                const product = await Product.findById(pId);
                if (product) {
                    return product;
                } else {
                    throw new Error('Product not found');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        async getProductsByUser(_, { username }) {
            try {
                const products = await Product.find({ username }).sort({ createdAt: -1 });
                return products;
            } catch (err) {
                throw new Error(err);
            }
        },
        async getProductsByCategory(_, { category }) {
            try {
                const products = await Product.find({ category });
                return products;
            } catch (err) {
                throw new Error(err);
            }
        }
    },
    Mutation: {
        async createProduct(_, { title, description, location, image, category, region, creator }, context) {
            const user = checkAuth(context);
            if (title.trim() === '') {
                throw new Error('Името на продуктот не смее да биде празно!');
            }
            if (description.trim() === '') {
                throw new Error('Името на продуктот не смее да биде празно!');
            }
            if (location.trim() === '') {
                throw new Error('Градот на продуктот не смее да биде празен!');
            }
            if (category.trim() === '') {
                throw new Error('Одберете категорија');
            }
            const newProduct = new Product({
                title,
                description,
                username: user.email,
                telephone: user.telephone,
                location,
                image,
                createdAt: new Date().toISOString(),
                category,
                region,
                creator: user.id,
            });
            const product = await newProduct.save();
            return product;
        },
        async enterBatchProducts(_, { productsList }, context) {
            const user = checkAuth(context);
            for (let i = 0; i < productsList.length; i++) {
                let newProduct = new Product({
                    title : productsList[i].title,
                    description : productsList[i].description,
                    username: user.email,
                    telephone: user.telephone,
                    image : productsList[i].image,
                    createdAt: new Date().toISOString(),
                    category : productsList[i].category,
                    region : productsList[i].region,
                    price : productsList[i].price,
                    baseQuantity : productsList[i].baseQuantity,
                    unit : productsList[i].unit,
                    creator: user.id,
                })
                const product = await newProduct.save();
            }
            return "Ok"
        },
        async deleteProduct(_, { pId }, context) {

            const user = checkAuth(context);

            try {
                const product = await Product.findById(pId);
                if (user.email === product.username) {
                    await product.delete();
                    return 'Продуктот е успешно избришан'
                } else {
                    throw new AuthenticationError('Недозволена акција');
                }
            } catch (err) {
                throw new Error(err);
            }
        },
        async sendOrderEmail(_,{nameAndSurname,address,telephone,description,}){
            const orderInfo = {
                nameAndSurname,
                address,
                telephone,
                description
            }
            mailer(orderInfo);
        }
    }
}