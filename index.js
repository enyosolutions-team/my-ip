// create javascript app to return the ip address of the client

const axios = require('axios');
const express = require('express');

const app = express();

app.get('/', async (req, res) => {
  const result = {};
  try {
    const { data } = await axios.get(`https://ipapi.co/${req.ip}/json/`);
    result.data = data;
  } catch (err) {
    console.warn(err);
  }
  res.json({
    ip: req.ip,
    ...result,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`istening on port ${process.env.PORT || 3000}!`);
});
