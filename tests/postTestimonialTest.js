import http from 'k6/http';
import { TEST_CONFIG } from '../config/constant.js';
import { PAYLOADS } from '../data/Payloads.js';
import { postTestimonialRequest } from '../requests/postTestimonialRequest.js';
import {  loginRequest} from '../requests/authRequest.js';
import { validateResponse } from '../checks/authChecks.js';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};

export default function postTestimonialTest(){

    //login to get the token
    const loginResponse = loginRequest(PAYLOADS.login);

    // Get the token
    const token = loginResponse.json().data.token;

    const response =postTestimonialRequest(PAYLOADS.post_testimonial, token);

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    validateResponse(response)
}