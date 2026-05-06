import http from 'k6/http';
import { URLs } from '../config/urls.js';
import { HEADERS } from '../config/constant.js';

export function updateTestimonialRequest(payload, token, id){

    const url = URLs.update_testimonial(id);
    const body = JSON.stringify(payload)


        // AI assisted code for adding authorization header
        const headers = {
            ...HEADERS.json, 
            'Authorization': `Bearer ${token}` 
        };

    return http.put(url, body, { headers });
    
}