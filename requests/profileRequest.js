import http from 'k6/http';
import { URLs } from '../config/urls';
import { HEADERS } from '../config/constants';

export function getProfile(token){
     const headers = token ? { ...HEADERS.json, Authorization: `Bearer ${token}` } : HEADERS.json;
    return http.get(URLS.profile, { headers });
}