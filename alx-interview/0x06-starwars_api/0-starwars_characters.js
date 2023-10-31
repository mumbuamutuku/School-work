#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

async function getMovieCharacters(movieId) {
  const baseUrl = `https://swapi.dev/api/films/${movieId}/`;

  request(baseUrl, async (error, response, body) => {
    if (error) {
      console.error("Error:", error);
      return;
    }

    const data = JSON.parse(body);
    const characterUrls = data.characters;

    for (let i = 0; i < characterUrls.length; i++) {
      const characterUrl = characterUrls[i];
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error("Error:", error);
          return;
        }

        const character = JSON.parse(body);
        console.log(character.name);
      });
    }
  });
}

getMovieCharacters(movieId);

