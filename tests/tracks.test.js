const request = require("supertest");
const express = require("express");
const { searchTracks } = require("../src/controllers/tracks"); // Import the searchTracks function
/**
 * Tests for the /tracks endpoint.
 */

describe("GET /tracks", () => {
  /**
   * Test case: should respond with a list of tracks
   */
  it("should respond with a list of tracks", async () => {
    const searchQuery = process.env.SEARCH_QUERY; // Provide search query when running the test

    const app = express();
    app.get("/tracks", searchTracks); // Attach the searchTracks handler to the /tracks route

    const response = await request(app).get(`/tracks?q=${searchQuery}`);
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  /**
   * Test case: should respond with a 400 error for missing query parameter
   */
  it("should respond with a 400 error for missing query parameter", async () => {
    const app = express();
    app.get("/tracks", searchTracks); // Attach the searchTracks handler to the /tracks route

    const response = await request(app).get("/tracks");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Missing search query");
  });

  /**
   * Test case: should respond with a 500 error for internal server error
   * @swagger
   * /tracks:
   *   get:
   *     summary: Simulate an internal server error.
   *     tags:
   *       - Error Scenarios
   *     responses:
   *       500:
   *         description: Internal server error.
   */
  it("should respond with a 500 error for internal server error", async () => {
    const app = express();
    app.get("/tracks", (req, res) => {
      throw new Error("Something went wrong"); // Simulate an internal server error
    });

    const response = await request(app).get("/tracks");
    expect(response.status).toBe(500);
  });
});
