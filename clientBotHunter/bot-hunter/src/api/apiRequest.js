import config from '../config';
const fetch = require('node-fetch');

export async function apiRequest(reqUrl, method, body = undefined) {
  const { baseUrl } = config;
  const url = `${baseUrl}/${reqUrl}`;

  let reqSettings = { method };

  if (body) reqSettings[body] = body;

  return fetch(url, reqSettings)
    .then(handleResponse)
    .catch((err) => {
      throw err;
    });
}

export async function handleResponse(res) {
  if (res.ok) {
    try {
      return await res.json();
    } catch (err) {
      console.error(`Could not parse server response. ${err}`);
    }
  }
  throw new Error('Network response was not ok.');
}
