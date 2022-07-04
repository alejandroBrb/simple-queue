const error = async (ctx, next) => {
  return next().catch((err) => {

    switch (err.name) {
      case 'Error':
        ctx.status = 422;
        ctx.body = { message: err.message };
        break;

      default:
        ctx.status = 500;
        ctx.body = { message: 'Something is broken' };
    }
  });
};

export default error;
