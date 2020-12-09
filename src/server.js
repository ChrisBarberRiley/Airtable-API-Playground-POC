const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

dotenv.config();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on ${PORT} port!`));
