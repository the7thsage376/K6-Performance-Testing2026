import { loginRequest } from '../requests/01_authRequest.js';
import { postTestimonialRequest } from '../requests/03_postTestimonialRequest.js';
import { deleteTestimonialRequest } from '../requests/05_deleteTestimonialRequest.js';
import { PAYLOADS } from '../data/Payloads.js';
import { TEST_CONFIG } from '../config/constant.js';
import { validateResponse } from '../checks/authChecks.js';
import { URLs } from '../config/urls.js';
import { sleep } from 'k6';

const options = {
    vus:TEST_CONFIG.VUS,
    duration:TEST_CONFIG.DURATION,
};

export default function deleteTestimonial() {

    // login and get token for authorization
    const loginResponse = loginRequest(PAYLOADS.login);
    const token = loginResponse.json()?.data?.token;

    //create testimonial to delete
    const postResponse = postTestimonialRequest(PAYLOADS.post_testimonial, token);
    const body = postResponse.json();
    const TestimonialId= body?.data?.Id;

    sleep(1); // Simulate user think time
    
    // delete testimonial
    const response =deleteTestimonialRequest(token, TestimonialId);

    console.log(`FULL DELETE URL: ${URLs.delete_testimonial(TestimonialId)}`);

     console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    validateResponse(response);
}
