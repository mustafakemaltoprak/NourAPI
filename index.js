const express = require('express');
const cors = require('cors');
const app = express();
const importData = require('./app.json');
let port = process.env.PORT || 3005;
let today = new Date();
let yesterday = new Date('July 12, 2022');

let hadithNumber = 0;

if (today !== yesterday) {
  console.log('hello');
  yesterday = today;
  today = new Date();
  hadithNumber = hadithNumber + 1;

  if (hadithNumber === 3) {
    hadithNumber = 0;
  }
}

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/hadith', (req, res) => {
  res.send(importData[hadithNumber]);
});

app.listen(port, () => {
  console.log(`Listening on port ${port} 🚀`);
});
