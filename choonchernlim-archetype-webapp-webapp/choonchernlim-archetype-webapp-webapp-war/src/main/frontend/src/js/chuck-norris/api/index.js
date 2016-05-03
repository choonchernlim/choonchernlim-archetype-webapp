import fetch from 'isomorphic-fetch';

export function getRandomJoke() {
  // return fetch('https://api.icndb.com/jokes/random/');
  return fetch('/api/jokes/random');
}
