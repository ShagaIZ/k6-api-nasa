import { BASE_URL } from '../common/urls.js';
import { PERSONAL_TOKEN } from '../common/token.js';
import http from 'k6/http';

export function getInfoAsteroid(startDate, endDate){
    return http.get(`${BASE_URL}neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${PERSONAL_TOKEN}`)
}