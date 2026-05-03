import http from 'k6/http';
import { URLs } from '../config/urls.js';
import { HEADERS } from '../config/constant.js';

export function postTestimonialRequest(payload){

    const url = URLs.post_testimonial
    const body = JSON.stringify(payload)
    const headers = HEADERS.json;

    return http.post(url, body, { headers });
}