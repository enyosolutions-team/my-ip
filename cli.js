// create javascript app to return the ip address of the client

const axios = require('axios');

axios
  .get(process.env.MYIP_SERVER || 'https://ip.enyo.cc/ip')
  .then(({ data }) => {
    console.log(data);
  })
  .catch(console.warn);
