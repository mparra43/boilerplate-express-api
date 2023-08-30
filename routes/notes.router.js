const express = require('express');
const NoteService = require('../services/note.service');
const validatorHandler = require('../middlewares/validator.handler');
const { validateJwt } = require('../middlewares/validateJwt')
const { noteSchema, getNoteSchema, getBySessionNoteSchema } = require('../schemas/note.schema');

const router = express.Router();
const service = new NoteService();

router.get('/', async (req, res, next) => {
  try {
    // const products = await service.getCredit();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/1', async (req, res) => {

  try {
    // const company = await service.generatePromissoryNote(1,1);
    res.status(201).json(company);
  } catch (error) {
    console.log(error)

  }

});

router.get('/:id',
  validatorHandler(getNoteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log(id)
      // const credits = await service.find(id);
      res.json(credits);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  validatorHandler(noteSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = validateJwt(req, res, next);
      const body = req.body;
      const note = await service.create(user, body);
      res.status(201).json(note);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
