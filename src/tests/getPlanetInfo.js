import { sleep, check } from 'k6';
import { getPlanetInfo } from '../../executors/planetInfo.js';


export const options = {
  stages: [
    { duration: '5s', target: 2 },
    { duration: '1s', target: 1 },
  ],
}

const apod = 'apod'

export default function () {
 let response =  getPlanetInfo(apod)
  check(response, {
    'status code is 200': (res) => res.status === 200
  })
}