const { getTopTracks } = require("../controllers/toptracks");

/**
 * Defines routes related to tracks.
 * @param {import("express").Router} router - Express router.
 * 
*/

const topTracksRoute = (router) => {
  /**
   * @swagger
//    * tags:
//    *   name: Streaming API Single Artist's Top Tracks
//    *   description: This endpoint returns a list of top tracks of a particular artist.
   *
   * /{artistId}/toptracks:
   *   get:
   *     summary: Get artist's top tracks.
   *     parameters:
   *       - in: path
   *         name: artistId
   *         required: true
   *         description: The ID of the artist.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Successful response with artist's top tracks.
   *         content:
   *           application/json:
   *             example:
   *               tracks: [
   *                 {
   *                   id: 123,
   *                   title: "Track 1",
   *                   artist: "Artist Name",
   *                   // Other track properties
   *                 },
   *                 // More tracks
   *               ]
   *       400:
   *         description: Bad request if artistId is missing.
   *       500:
   *         description: Internal server error.
   */

  router.get("/:artistId/toptracks", getTopTracks);
};

module.exports = { topTracksRoute };
