import http from 'k6/http';
import { URLs } from '../config/urls';

export function updateTestimonialRequest(payload){

    const url = URLs.update_testimonial
    const body = JSON.stringify(payload)

    return http.put(url, body)
}