import http from 'k6/http';
import { URLs } from '../config/urls';

export function PostTestimonialRequest(payload){

    const url = URLs.post_testimonial
    const body = JSON.stringify(payload)

    return http.post(url, body)
}