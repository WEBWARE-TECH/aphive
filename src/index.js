import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req, res) => {
  res.send({ message: 'Hello' });
});

app.get('/page/:id', (req, res) => {
  res.send({ id: req.params.id });
});

app.get('/security/:id', (req, res) => {
  setTimeout(
    () =>
      res.send({
        view: ['SEARCH', 'GRID', 'ADD'],
        access: req.params.id === '1' ? ['EDIT', 'DELETE', 'VIEW', 'ADD'] : ['VIEW'],
      }),
    Math.floor(Math.random() * 2000 + 100)
  );
});

app.listen(3000, () => {
  console.log('Application listening on port 3000');
});
