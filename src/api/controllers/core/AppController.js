/**
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://Appjs.org/#!/documentation/concepts/Controllers
 * AppController
 */

const axios = require('axios');

/** Class Basic controller of the instance */
class AppController {
  /**
   * @description Get the status of the app, along with the current api versions.
   * `AppController.status()`
   */
  status(req, res) {
    res.json({
      status: 'OK',
    });
  }

  async ip(req, res) {
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
  }
}

module.exports = new AppController();
