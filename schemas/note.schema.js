const Joi = require('joi');
const id = Joi.number().integer();
const sessionId = Joi.number().integer();
const movieId = Joi.number().integer();;
const note = Joi.string().min(3).max(60);



const noteSchema = Joi.object({
  note: note.required(),
  movieId: movieId.required(),
 
});

const getBySessionNoteSchema = Joi.object({
  session_id: sessionId.required(),
});

const getNoteSchema = Joi.object({
  id: id.required(),
});



module.exports = { noteSchema , getNoteSchema , getBySessionNoteSchema }
