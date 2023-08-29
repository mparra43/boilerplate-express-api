const boom = require('@hapi/boom');
const accountSid = 'AC0756ddbd0c98ad8d510ccaf9cb0b429e'; // Your Account SID from www.twilio.com/console
const authToken = '4a1e1c81572d6528643f447601d82d8b';


const client = require('twilio')(accountSid, authToken);

async function sendMessageWhatsapp(cellphone, message) {

 
    try {

      await client.messages.create({
        from: 'whatsapp:+14155238886',
        body: message,
        to: 'whatsapp:+573102759655'
      }).then(message =>  message.sid);


    } catch (error) {
      next(boom.badRequest(error));
    }
   
  }


module.exports = sendMessageWhatsapp;
