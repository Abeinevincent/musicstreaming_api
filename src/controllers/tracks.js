const axios = require("axios");

/**
 * Search tracks in the Deezer API database.
 * @param {import("express").Request} req - Express request object.
 * @param {import("express").Response} res - Express response object.
 * @returns {Promise<void>}
 */

const searchTracks = async (req, res) => {
  try {
    const searchQuery = req.query.q;
    if (!searchQuery) {
      return res.status(400).json({ error: "Missing search query" });
    }

    // Make a request to Deezer API
    const deezerResponse = await axios.get(
      `${process.env.DEEZER_API_SEARCH_URL}?q=${searchQuery}`
    );

    const tracks = deezerResponse.data;
    console.log(tracks);
    return res.status(200).json({ tracks });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { searchTracks };
