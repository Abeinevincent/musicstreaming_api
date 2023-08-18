/**
 * swaggerconfig.ts
 */

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  // Swagger definition
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Music Streaming API Documentation",
      version: "1.0.0",
      description: `Music streaming API built on top of Deezer's API`,
    },
    servers: [
      {
        url: "/api/v1",
      },
    ],
  },

  // API ROUTES
  apis: ["./src/routes/**/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerSpec };
