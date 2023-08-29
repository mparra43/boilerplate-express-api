

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../config/config.js')['development'];
const { User, UserSchema } = require('../database/models/user.model');
const { Note, NoteSchema } = require('../database/models/note.model')

const setupModels =(sequelize) =>{
  User.init(UserSchema, User.config(sequelize));
  Note.init(NoteSchema, Note.config(sequelize));

  User.associate(sequelize.models);
  Note.associate(sequelize.models);
 
}

const USER = encodeURIComponent(config.username);
const PASSWORD = encodeURIComponent(config.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.host}:${config.port}/${config.database}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});
setupModels(sequelize);

// FIXME - THE DELEME ME ON PRODUCTION
 //sequelize.sync();

module.exports = sequelize;
