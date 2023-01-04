// create javascript app to return the ip address of the client

const axios = require('axios');
const express = require('express');

const app = express();

app.get(['/', '/ip'], async (req, res) => {
  const result = {};
  const ip =
    req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  try {
    const { data } = await axios.get(`https://ipapi.co/${ip}/json/`);
    result.data = data;
  } catch (err) {
    console.warn(err);
  }
  res.json({
    ip,
    ...result,
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`istening on port ${process.env.PORT || 3000}!`);
});
