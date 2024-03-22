

import {MAP_URI} from '../constants/default-settings';

export function parseQueryString(query) {
  const searchParams = new URLSearchParams(query);
  const params = {};
  for (const p of searchParams) {
    if (p && p.length === 2 && p[0])
    params[p[0]] = p[1]
  }

  return params;
}

/**
 * Returns a permalink with the given map url: kepler.gl/[]
 * @param mapLink the cloud-providers url used to store the map
 * @returns {string}
 */
export function getMapPermalink(mapLink) {
  return `${window.location.protocol}//${window.location.host}/${MAP_URI}${mapLink}`
}
