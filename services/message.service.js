
const accountSid = 'AC0756ddbd0c98ad8d510ccaf9cb0b429e'; // Your Account SID from www.twilio.com/console
const authToken = '4a1e1c81572d6528643f447601d82d8b';
const { models } = require('../libs/sequelize');

const client = require('twilio')(accountSid, authToken);

class MessageService {

  constructor() {
  }

  async create(chatId, text, phoneNumber, type) {

    // let sid = ''
    // await client.messages.create({
    //   from: 'whatsapp:+14155238886',
    //   body: text,
    //   to: 'whatsapp:+573102759655'
    // }).then(message => sid = message.sid);

    // const message = await models.Message.create({ chatId, sid, text, type });
    // console.log(message)
    // return message

  }

  async save(chatId, sid, text, type) {

    // const message = await models.Message.create({ chatId, sid, text, type });
    // return message

  }


  async findChatMessages(chat, type) {

    // const search = type ? { chatId: chat, type}: { chatId: chat}

    // const messages = models.Message.findOne({
    //   where: search,
    //   order: [['createdAt', 'DESC']]
    // })

    // return messages;
  }

  async sendMessage(data) {

    // const { name, cellphone, message } = data;

    // let message_uid = ''
    // await client.messages.create({
    //   from: 'whatsapp:+14155238886',
    //   body: message,
    //   to: 'whatsapp:+573102759655'
    //   // })
    // }).then(message => message_uid = message.sid);


    // return message_uid
  }

  async find() {
    return [];
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = MessageService;
