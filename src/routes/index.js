const { tracksRoute } = require("./tracks");
const router = require("express").Router();

const routes = () => {
  tracksRoute(router);

  return router;
};

module.exports = routes;
