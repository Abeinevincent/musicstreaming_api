// Initialise the app as an express app
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./routes");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("../swaggerconfig");

// MIDDLEWARES *************************************

// List of allowed origins
const allowedOrigins = [
  process.env.DEEZER_API_HOME_URL,
  process.env.MY_API_HOME_URL,
  "http://localhost:8000",
  "http://localhost:5173",
];

// Use cors middleware with allowed origins
app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Swagger api docs
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// custom routes
app.use("/api/v1/", routes());

// START THE BACKEND SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Backend server is listening at port ${PORT}`);
});

module.exports = app; // Export the app instance
