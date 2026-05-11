import { TEST_CONFIG } from '../config/constant.js';
import { PAYLOADS } from '../data/Payloads.js';
import { updateTestimonialRequest } from '../requests/04_updateTestimonialRequest.js';
import { postTestimonialRequest } from '../requests/03_postTestimonialRequest.js';
import {  loginRequest} from '../requests/01_authRequest.js';
import { validateResponse } from '../checks/authChecks.js';
import { URLs } from '../config/urls.js';


export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};

export default function updateTestimonialTest(){

    //login to get the token
    const loginResponse = loginRequest(PAYLOADS.login);

    // Get the token
    const token = loginResponse.json()?.data?.token;

    //create testimonial to update
    const postResponse = postTestimonialRequest(PAYLOADS.post_testimonial, token);
    const body = postResponse.json();
    const TestimonialId= body?.data?.Id;


    const response =updateTestimonialRequest(PAYLOADS.update_testimonial, token, TestimonialId);

    console.log(`FULL UPDATE URL: ${URLs.update_testimonial(TestimonialId)}`);
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    validateResponse(response)
}