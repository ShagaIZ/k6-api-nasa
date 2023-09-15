import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL } from '../../common/urls.js';
import { PERSONAL_TOKEN } from '../../common/token.js';
import { mainOptions } from '../../mainLoadOptions.js';


export const options = {
  stages: [
    { duration: '3s', target: 2 },
    { duration: '1s', target: 1 },
  ],
}
const startDate = '2022-12-02'
const endDate = '2022-12-03'


export default function () {
  let response = http.get(`${BASE_URL}neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${PERSONAL_TOKEN}`);
  check(response, {
    'status code is 200': (res) => res.status === 200
  })
}