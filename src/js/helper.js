import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';

const timeOut = function (s) {
  return new Promise(function (_, reject) {
    setInterval(function () {
      reject(new Error(`Request took to long time Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    const getData = await fetch(url);

    const rec = await Promise.race([getData, timeOut(TIMEOUT_SEC)]);

    const data = await getData.json();

    if (!data) throw new Error(data.message);
    return data;
  } catch (err) {
    throw err;
  }
};
