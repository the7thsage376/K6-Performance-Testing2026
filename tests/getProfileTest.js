import { sleep } from 'k6';
import { TEST_CONFIG } from '../config/constant.js';
import { loginRequest } from '../requests/authRequest.js';
import { getProfile } from '../requests/profileRequest.js';
import { validateResponse } from '../checks/authChecks.js';
import { PAYLOADS } from '../data/Payloads.js';

export const options = {
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration,
};

export default function getProfileTest(){
    const loginRequestPayload = loginRequest(PAYLOADS.login);
    validateResponse(loginRequestPayload);

    const body = loginRequestPayload.json();
    const token = body.data.token;
    const response = getProfile(token);

    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${response.body}`);

}