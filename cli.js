#!/usr/bin/env node
// create javascript app to return the ip address of the client

const axios = require('axios');
// get local ip from os
const os = require('os');

const interfaces = os.networkInterfaces();
const addresses = []; // eslint-disable-line
for (const k in interfaces) {
  for (const k2 in interfaces[k]) {
    const address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal) {
      addresses.push(address.address);
    }
  }
}

axios
  .get(process.env.MYIP_SERVER || 'https://ip.enyo.cc/ip')
  .then(({ data }) => {
    data.local = addresses;
    console.log(data);
  })
  .catch((err) =>
    console.warn(err.response && err.response.data ? err.response.data : err.message),
  );
