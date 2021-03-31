const express = require('express');
const cors = require('cors');
const getLinks = require('./src/parser2.js');

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
  const { url } = req.query;

  try {
    const myURL = new URL(url);
    const links = await getLinks(myURL);
    if (links.length) {
      res.send(links);
    } else {
      res.send('error');
    }
  } catch (error) {
    res.send('invalid');
  }
});

app.listen(3000, () => console.log('Started...'));
