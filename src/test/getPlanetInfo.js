import http from 'k6/http';
import { sleep } from 'k6';
import { APOD_URL, BASE_URL } from '../../common/urls.js';
import { DEMO_KEY } from '../../common/token.js';
import { optionsGetPlanetInfo } from '../../mainLoadOptions.js';


export const options = optionsGetPlanetInfo


export default function () {
 let response =  http.get(`${BASE_URL}planetary/${APOD_URL}?api_key=${DEMO_KEY}`);
  check(response, {
    'status code is 200': (res) => res.status === 200
  })
}