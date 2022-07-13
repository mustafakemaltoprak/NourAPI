const express = require('express');
const app = express();
const importData = require('./app.json');
let port = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/hadith', (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
