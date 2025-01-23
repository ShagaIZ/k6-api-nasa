import { sleep, check } from 'k6';
import { getPlanetInfo } from '../../executors/planetInfo.js';


export const options = {
  executor: 'ramping-vus',
  startVUs: 0,
  stages: [
    { duration: '50s', target: 2 },
    { duration: '10s', target: 1 },
  ],
}

const apod = 'apod'

export default function () {
 let response =  getPlanetInfo(apod)
  check(response, {
    'status code is 200': (res) => res.status === 200,
    'response time less than 500 ms': (res) => res.timings.receiving < 500
  })
}