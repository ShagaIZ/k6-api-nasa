import { check, sleep } from 'k6';
import { getInfoAsteroid } from '../../executors/asteroidNeoInfo.js';



export const options = {
  stages: [
    { duration: '3s', target: 2 },
    { duration: '1s', target: 1 },
  ],
}
const startDate = '2022-12-02'
const endDate = '2022-12-03'


export default function () {
  let response = getInfoAsteroid(startDate, endDate);
  check(response, {
    'status code is 200': (res) => res.status === 200
  })
}