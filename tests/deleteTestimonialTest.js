import { loginRequest } from '../requests/authRequest.js';
import { postTestimonialRequest } from '../requests/postTestimonialRequest.js';
import { deleteTestimonialRequest } from '../requests/deleteTestimonialRequest.js';
import { PAYLOADS } from '../data/Payloads.js';
import { TEST_CONFIG } from '../config/constant.js';
import { validateResponse } from '../checks/authChecks.js';

const options = {
    vus:TEST_CONFIG.VUS,
    duration:TEST_CONFIG.DURATION,
};

export default function deleteTestimonial() {

    // login and get token for authorization
    const loginResponse = loginRequest(PAYLOADS.login);
    const token = loginResponse.json().data.token;
    
    const response =deleteTestimonialRequest(token, id);
}
