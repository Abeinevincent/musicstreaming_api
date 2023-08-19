const { getAlbums } = require("../controllers/albums");

/**
 * Defines routes related to tracks.
 * @param {import("express").Router} router - Express router.
 *
 */

const albumsRoute = (router) => {
  /**
   * @swagger
//    * tags:
//    *   name: Streaming API Single Artist's Albums
//    *   description: This endpoint returns a list of albums based on the artistId.
   *
   * /{artistId}/albums:
   *   get:
   *     summary: Get artist's albums.
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
   *               albums: [
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

  router.get("/:artistId/albums", getAlbums);
};

module.exports = { albumsRoute };
