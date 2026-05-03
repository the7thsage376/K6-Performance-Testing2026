import http from 'k6/http';
import { TEST_CONFIG } from '../config/constant.js';
import { PAYLOADS } from '../data/Payloads.js';
import { postTestimonialRequest } from '../requests/PostTestimonialRequest.js';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};

export default function postTestimonialTest(){

    const response =postTestimonialRequest(PAYLOADS.post_testimonial);

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    validateResponse(response)
}