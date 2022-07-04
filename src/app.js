import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';

import config from './config.js';
import error from './error.js';
import router from './router.js';

const init = () => {
  const app = new Koa();

  app.use(logger());
  app.use(bodyParser());
  app.use(error);

  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen(config.PORT);
};

export default init;
