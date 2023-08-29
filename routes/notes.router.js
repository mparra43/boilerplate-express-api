const express = require('express');

// const  CreditService = require('../services/credit.service');
const validatorHandler = require('../middlewares/validator.handler');
const  { noteSchema , getNoteSchema , getBySessionNoteSchema } = require('../schemas/note.schema');

const router = express.Router();
// const service = new  CreditService();

router.get('/', async (req, res, next) => {
  try {
    // const products = await service.getCredit();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/1', async(req, res) => {

    try {
      // const company = await service.generatePromissoryNote(1,1);
      res.status(201).json(company);
    } catch (error) {
      console.log(error)
      
    }
  
});

router.get('/:id',
  validatorHandler(getNoteSchema , 'params'),
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

// router.post('/',
//   validatorHandler(createProductSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newProduct = await service.create(body);
//       res.status(201).json(newProduct);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.patch('/:id',
//   validatorHandler(getProductSchema, 'params'),
//   validatorHandler(updateProductSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       const body = req.body;
//       const product = await service.update(id, body);
//       res.json(product);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// router.delete('/:id',
//   validatorHandler(getProductSchema, 'params'),
//   async (req, res, next) => {
//     try {
//       const { id } = req.params;
//       await service.delete(id);
//       res.status(201).json({ id });
//     } catch (error) {
//       next(error);
//     }
//   }

 
// );

router.post('/promote',
  validatorHandler(noteSchema , 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      // const promoteCredit = await service.promoteCredit(body);
      res.status(201).json(body);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
