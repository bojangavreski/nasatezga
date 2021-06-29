const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: "databasemasters602@gmail.com",
        pass: "finkiUKIM2021"
    },
})

module.exports = transporter;