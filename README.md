# Music Streaming API

Welcome to version one (v1) of the Music Streaming API, a web application programming interface, built on top of Deezer's API, that allows users to search for and listen to tracks from the Deezer API.
The API retrieves a list of tracks in the Deezer's database according to the search query and can be used accordingly. 
Extra functionalities such as authentication and authorisation will come in the coming versions of the api.

## Installation

To run the Music Streaming App locally, follow these steps:

```sh
# Clone this repository to your local machine
git clone https://github.com/Abeinevincent/music-streaming-app.git

# Navigate to the project directory
cd music-streaming-app

# Install the required dependencies using npm
npm install

# Set up environment variables:
# - Create a `.env` file in the root directory of the project
# - Add your Deezer API credentials to the `.env` file
DEEZER_APP_ID=your-app-id
DEEZER_SECRET_KEY=your-secret-key
DEEZER_API_SEARCH_URL=https://api.deezer.com/search

# Start the development server
npm start

# Run tests
npm test

# Access the app in your web browser at http://localhost:8000
```
## Usage

Search for your favorite tracks using the Music Streaming App:

1. Enter a search query as a query parameter
2. The api will return a list of tracks that match your search query

For more examples and usage, please refer to the [documentation](https://musicstreamingapp-a2500a5331b4.herokuapp.com/api/v1/api-docs).

