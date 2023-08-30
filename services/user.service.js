const boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const { models } = require('../libs/sequelize');
const { generateJWT } = require('../middlewares/jwt')

class UserService {
  constructor() { }


  async findOneByEmail(email) {
    return await models.User.findOne({ where: { email } })
  }

  async create(data) {

    const { email, password, session_id, guest_session_id } = data;

    try {
      const user = this.findOneByEmail(email)
      if (user !== null) { throw boom.notFound('This user already exists') };
      const salt = bcryptjs.genSaltSync();
      const userPassword = bcryptjs.hashSync(password, salt);
      const newUser = await models.User.create({
        email,
        password: userPassword,
        session_id,
        guest_session_id
      });
      return newUser
    } catch (error) {
      console.error(error);
    }
  }



  async login(data) {
    const { email, password } = data;
    try {
      const user = await this.findOneByEmail(email);
      if (user !== null) {
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) { throw boom.notFound('Invalid data') };
        const token = await generateJWT(user.id, user.session_id);
        return {token, session_id: user.session_id, guest_session_id: user.guest_session_id}
      } else {
        { throw boom.notFound('permission denied') };
      }
    } catch (error) {
      console.error(error);
    }
  }



  async validateToken() {
    const { id, session_id} = req;
    return await generateJWT(id, session_id);
  }

}



module.exports = UserService;
