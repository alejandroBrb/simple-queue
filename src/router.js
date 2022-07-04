import krouter from 'koa-router';
import { addToQueue } from './queues.js';

const router = krouter();

router.get('/', async (ctx) => {
  ctx.response.status = 200;
});

router.post('/queue', async function(ctx) {
  try {
      addToQueue({ data: ctx.request.body });
      ctx.response.status = 200;
  } catch (e) {
      ctx.throw(500, e);
  }
});

export default router;
