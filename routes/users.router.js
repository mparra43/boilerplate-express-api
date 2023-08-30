const express = require('express');

const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, loginUserSchema, } = require('./../schemas/user.schema');
const { validateJwt } = require('../middlewares/validateJwt');

const router = express.Router();
const service = new UserService();


router.get('/renew',
  async (req, res, next) => {
    try {
      validateJwt(req, res, next);
      const token = await service.validateToken(req.params);
      res.json(token);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/login',
  validatorHandler(loginUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.login(body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);




module.exports = router;

