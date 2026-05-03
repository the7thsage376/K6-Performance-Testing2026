import http from 'k6/http';
import { URLs } from '../config/urls.js';

export function deleteTestimonialRequest(payload){

    const url = URLs.delete_testimonial
    const body = JSON.stringify(payload)

    return http.delete(url, body)
}