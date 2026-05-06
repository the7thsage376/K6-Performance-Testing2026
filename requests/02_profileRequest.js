import http from 'k6/http';
import { URLs } from '../config/urls.js';
import { HEADERS } from '../config/constant.js';

export function getProfile(token){
     const headers = token ? { ...HEADERS.json, Authorization: `Bearer ${token}` } : HEADERS.json;
    return http.get(URLs.profile, { headers });
}