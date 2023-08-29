const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer  = require('multer')
const routerApi = require('./routes');
const CorsService = require('./services/cors/cors.service');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();


const APP_PORT = process.env.APP_PORT || 3000;
const APP_HOST = process.env.APP_HOST || 'localhost';

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


async function startServer() {
  // NOTE - With this new configuration you can execute async function here, before starting to listen on the app

  app.listen(APP_PORT, APP_HOST, () => {
    console.info(`Server's running on the host http://${APP_HOST}:${APP_PORT}`);
  });
}

startServer();
