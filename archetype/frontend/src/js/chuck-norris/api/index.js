import fetch from 'isomorphic-fetch';
import path from 'path';
import packageJson from '../../../../package.json';

export function getRandomJoke() {
  return fetch(path.join(packageJson.config.context_root, '/api/jokes/random'));
}
