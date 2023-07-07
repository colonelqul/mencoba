const express = require('express');
const Chance = require('chance');
const serverless = require('serverless-http');

const app = express();
const chance = new Chance();
const router = express.Router();

router.get('/', (req, res) => {
  const animals = ['kucing', 'anjing', 'kelinci', 'burung', 'kuda'];
  const randomAnimal = chance.pickone(animals);

  const response = {
    animal: randomAnimal
  };

  res.json(response);
});

app.use('.netlify/functions/api',router);

module.exports.handler = serverless(app);