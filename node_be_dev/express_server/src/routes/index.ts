import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Api route');
});

export default routes;