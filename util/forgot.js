const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const transporter = require('./mailer');

const calcJWT = (email) => {
    const mailSecret = 'qwoidjqwiodjh1892ejdkjqdniuh';
    return jwt.sign({
        email:email
    },mailSecret,{expiresIn:'1h'});
}

const setUrl = (token)=>{
return `http://localhost:3000/passwordchange/${token}`;
}

const changePW = (email) => {
    const token = calcJWT(email);
    const url = setUrl(token);
    transporter.sendMail({
        to:email,
        subject: 'Промена на лозинка',
        html: `Ве молиме кликнете на овој линк за да ја промените вашата лозинка: ${url}`
    })
}

module.exports = {
    calcJWT,
    changePW
}