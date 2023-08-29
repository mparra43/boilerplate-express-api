const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const sessionId = Joi.string();
const guestSessionId = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  session_id: sessionId.required(),
  guest_session_id: guestSessionId.required()
});



const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, getUserSchema }
