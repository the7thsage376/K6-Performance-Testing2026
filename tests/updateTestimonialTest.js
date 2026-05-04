import http from 'k6/http';
import { TEST_CONFIG } from '../config/constant.js';
import { PAYLOADS } from '../data/Payloads.js';
import { updateTestimonialRequest } from '../requests/updateTestimonialRequest.js';
import {  loginRequest} from '../requests/authRequest.js';
import { validateResponse } from '../checks/authChecks.js';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};

export default function updateTestimonialTest(){

    //login to get the token
    const loginResponse = loginRequest(PAYLOADS.login);

    // Get the token
    const token = loginResponse.json().data.token;
    const id= loginResponsejson().data.id;

    const response =updateTestimonialRequest(PAYLOADS.update_testimonial, token, id);

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    validateResponse(response)
}