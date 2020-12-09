const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();

dotenv.config();

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.get('/fetch-data', async (req, res) => {
  try {
    const BASE_URL = `https://api.airtable.com/v0/app3moXo7so1Q7p7s/Bugs%20and%20issues?`;
    const PARAMS = new URLSearchParams({ maxRecords: 3 });
    const config = {
      headers: { Authorization: `Bearer ${process.env.BEARER}` },
    };
    console.log(BASE_URL);
    const { data } = await axios.get(`${BASE_URL}${PARAMS}`, config);
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
});

app.use(express.static(__dirname + '/public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
