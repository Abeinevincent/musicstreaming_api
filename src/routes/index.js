const { albumsRoute } = require("./albums");
const { topTracksRoute } = require("./toptracks");
const { tracksRoute } = require("./tracks");
const router = require("express").Router();

const routes = () => {
  tracksRoute(router);

  topTracksRoute(router);

  albumsRoute(router);

  return router;
};

module.exports = routes;
