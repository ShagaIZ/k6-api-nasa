import { DEMO_KEY } from '../common/token.js';
import { BASE_URL } from '../common/urls.js';
import http from 'k6/http';

export function getPlanetInfo(planet){
    return http.get(`${BASE_URL}planetary/${planet}?api_key=${DEMO_KEY}`)
}