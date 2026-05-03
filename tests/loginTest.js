import http from 'k6/http';
import {TEST_CONFIG} from '../config/constant.js';
import {PAYLOADS} from '../data/Payloads.js';
import {loginRequest} from '../requests/authRequest.js';
import {validateResponse} from '../checks/authChecks.js';
import {sleep} from 'k6';


export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};


export default function loginTest(){
    const response = loginRequest(PAYLOADS.login);
    
// Log the response status and body for debugging purposes
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);
    validateResponse(response);
}