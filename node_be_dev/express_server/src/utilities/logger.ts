import express from 'express';

const logger = (req: express.Request, res: express.Response, next:Function) => {
  console.log(req.url);
  next();
}

export default logger;