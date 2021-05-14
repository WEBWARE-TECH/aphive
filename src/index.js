import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});

app.listen(3000, () => {
  console.log('Application listening on port 3000');
});
