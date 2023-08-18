const { searchTracks } = require("../controllers/tracks");

/**
 * Defines routes related to tracks.
 * @param {import("express").Router} router - Express router.
 *
//  * @swagger
//  * tags:
//  *   name: Streaming API Tracks End Point
//  *   description: This endpoint returns a list of tracks of a particular artist from the search query
//  
*/

const tracksRoute = (router) => {
  /**
   * @swagger
   * tags:
   *   name: Streaming API Tracks End Point
   *   description: This endpoint returns a list of tracks based on the search query.
   *
   * /tracks:
   *   get:
   *     summary: Search tracks in the Deezer API database.
   *     tags:
   *
   *     parameters:
   *       - in: query
   *         name: q
   *         required: true
   *         description: The search query.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Successful response with track data.
   *         content:
   *           application/json:
   *             example:
   *               data: [
   *                 {
   *                   id: 916427,
   *                   readable: true,
   *                   title: "Superman",
   *                   title_short: "Superman",
   *                   title_version: "",
   *                   link: "https://www.deezer.com/track/916427",
   *                   duration: 350,
   *                   rank: 948247,
   *                   explicit_lyrics: true,
   *                   explicit_content_lyrics: 1,
   *                   explicit_content_cover: 0,
   *                   preview: "https://cdns-preview-d.dzcdn.net/stream/c-d56c95b55d8555bd7bb816d9518609d5-9.mp3",
   *                   md5_image: "ec3c8ed67427064c70f67e5815b74cef",
   *                   artist: {
   *                     id: 13,
   *                     name: "Eminem",
   *                     link: "https://www.deezer.com/artist/13",
   *                     picture: "https://api.deezer.com/artist/13/image",
   *                     picture_small: "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
   *                     picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
   *                     picture_big: "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
   *                     picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
   *                     tracklist: "https://api.deezer.com/artist/13/top?limit=50",
   *                     type: "artist"
   *                   },
   *                   album: {
   *                     id: 103248,
   *                     title: "The Eminem Show",
   *                     cover: "https://api.deezer.com/album/103248/image",
   *                     cover_small: "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/56x56-000000-80-0-0.jpg",
   *                     cover_medium: "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg",
   *                     cover_big: "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/500x500-000000-80-0-0.jpg",
   *                     cover_xl: "https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/1000x1000-000000-80-0-0.jpg",
   *                     md5_image: "ec3c8ed67427064c70f67e5815b74cef",
   *                     tracklist: "https://api.deezer.com/album/103248/tracks",
   *                     type: "album"
   *                   },
   *                   type: "track"
   *                 }
   *               ]
   *       400:
   *         description: Bad request if missing search query.
   *       500:
   *         description: Internal server error.
   */

  router.get("/tracks", searchTracks);
};

module.exports = { tracksRoute };
