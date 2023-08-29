

const { Sequelize } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../config/config.js')['development'];
const { Chat, ChatSchema } = require('../database/models/chat.model');
const { Company, CompanySchema } = require('../database/models/company.model');
const { Credit, CreditSchema } = require('../database/models/credit.model');
const { CreditRequest, CreditRequestSchema } = require('../database/models/credit.request.model');
const { Employee, EmployeeSchema } = require('../database/models/employee.model');
const { Message, MessageSchema } = require('../database/models/note.model');
const { User, UserSchema } = require('../database/models/user.model');
const { Document, DocumentSchema } = require('../database/models/document.model')

const setupModels =(sequelize) =>{
  Chat.init(ChatSchema, Chat.config(sequelize));
  Company.init(CompanySchema, Company.config(sequelize));
  Credit.init(CreditSchema, Credit.config(sequelize));
  CreditRequest.init(CreditRequestSchema, CreditRequest.config(sequelize));
  Employee.init(EmployeeSchema, Employee.config(sequelize));
  Message.init( MessageSchema,  Message.config(sequelize));
  Document.init(DocumentSchema, Document.config(sequelize));
 

  Chat.associate(sequelize.models);
  Company.associate(sequelize.models);
  Credit.associate(sequelize.models);
  CreditRequest.associate(sequelize.models);
  Employee.associate(sequelize.models);
  Message.associate(sequelize.models);
  Document.associate(sequelize.models);

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
//  sequelize.sync();

module.exports = sequelize;
