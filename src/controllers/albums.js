const axios = require("axios");

/**
 * Search tracks in the Deezer API database.
 * @param {import("express").Request} req - Express request object.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>}
 */

const getAlbums = async (req, res) => {
  try {
    const { artistId } = req.params;
    // if (!artistId) {
    //   return res.status(400).json({ error: "Missing artistId" });
    // }

    // Make a request to Deezer API
    const deezerResponse = await axios.get(
      `${process.env.DEEZER_API_URL}/artist/${artistId}/albums`
    );
    const albums = deezerResponse.data;
    console.log(albums);
    return res.status(200).json({ albums });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { getAlbums };
