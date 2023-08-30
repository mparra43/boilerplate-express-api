

const { models } = require('../libs/sequelize');



class NoteService {

  constructor() {
  }

  async create(user, data) {

    const { id, session_id } = user;
    try {
      const note =  await models.Note.create({ ...data, userId: id, session_id});
      console.log(note)
      return note 
    } catch (error) {
      console.error(error);
    }
  }

}

module.exports = NoteService;
