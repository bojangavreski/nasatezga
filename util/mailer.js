const sendGridMail = require('@sendgrid/mail');

const SENDGRID_API_KEY = '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'

sendGridMail.setApiKey(SENDGRID_API_KEY);


module.exports = function({nameAndSurname,address,telephone,description}){
    var mailOptions = {
        from: 'nashatezga.dev@gmail.com',
        to: 'rkoalicija@gmail.com',
        subject: `Нарачка од ${nameAndSurname}`,
        html: `<h2>Име и презиме: </h2>
              <h4>${nameAndSurname}</h4>
              <h2> Адреса за достава: </h2>
              <h4> ${address} </h4>
              <h2> Телефонски број: </h2>
              <h4> ${telephone} </h4>
              <h2> Опис: </h2>
              <h4> ${description} </h4>
        `
      };
      sendGridMail.send(mailOptions)
      .catch((err) => console.log(err))
}