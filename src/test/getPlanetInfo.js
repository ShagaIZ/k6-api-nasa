import http from 'k6/http';
import { sleep } from 'k6';
import { APOD_URL, BASE_URL } from '../../common/urls.js';
import { DEMO_KEY } from '../../common/token.js';


export const options = {
  stages: [
    { duration: '3s', target: 2 },
    { duration: '1s', target: 1 },
  ],
}

export default function () {
 let response =  http.get(`${BASE_URL}planetary/${APOD_URL}?api_key=${DEMO_KEY}`);
  check(response, {
    'status code is 200': (res) => res.status === 200
  })
}