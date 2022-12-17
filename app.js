const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
