import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Server started!');
});

app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});