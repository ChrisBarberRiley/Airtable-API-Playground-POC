const express = require('express');
const axios = require('axios');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

let cachedData;
let cachedTime;

// @desc        Register user
// @route       GET /fetch-data
// @access      Private
router.get('/fetch-data', async (req, res) => {
  // Check if user is reloading within 30 seconds and serve up memory cache
  if (cachedTime && cachedTime > Date.now() - 30 * 1000) {
    return cachedData;
  }

  try {
    // Declare base url & params
    const BASE_URL = `https://api.airtable.com/v0/app3moXo7so1Q7p7s/Bugs%20and%20issues?`;
    const PARAMS = new URLSearchParams({ maxRecords: 3 });
    const config = {
      headers: { Authorization: `Bearer ${process.env.BEARER}` },
    };

    // Make request for data from Air Table
    const { data } = await axios.get(`${BASE_URL}${PARAMS}`, config);

    // Declare cache
    cachedData = data;
    cachedTime = Date.now();
    data.cachedTime = cachedTime;

    return res.json(data);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
});

module.exports = router;
