import http from 'k6/http';
import { URLs } from '../config/urls.js';
import { HEADERS } from '../config/constant.js';

export function postTestimonialRequest(payload, token){

    const url = URLs.post_testimonial
    const body = JSON.stringify(payload)

    // AI assisted code for
    const headers = {
        ...HEADERS.json, 
        'Authorization': `Bearer ${token}` 
    };

    return http.post(url, body, { headers });
}