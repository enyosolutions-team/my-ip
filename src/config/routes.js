// const express = require('express');
/*
type RouteObject = {
  routes : {
    [key: string]: RouteDefinitions;
  };
};
*/

module.exports = {
  routes: {
    // '/': {
    //   controller: 'core/App',
    //   action: 'app',
    //   secure: false, // you need this if you defined you api as always secure !
    //   skipAssets: true,
    // },

    'OPTIONS /api/*': {
      controller: 'core/AppController',
      action: 'status',
      secure: false,
    },

    '/api/status': {
      controller: 'core/AppController',
      action: 'status',
      secure: false,
    },

    'GET /api': {
      controller: 'core/AppController',
      action: 'index',
      secure: false,
    },
  },
};
