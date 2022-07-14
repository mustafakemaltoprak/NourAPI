const express = require('express');
const cors = require('cors');
const app = express();
const importData = require('./app.json');
let port = process.env.PORT || 3005;
let today = new Date();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/hadith', (req, res) => {
  res.send(importData[today.getDay()]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
