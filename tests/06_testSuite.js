import loginTest from './01_loginTest.js';
import getProfileTest from './02_getProfileTest.js';
import postTestimonialTest from './03_postTestimonialTest.js';
import updateTestimonialTest from './04_updateTestimonialTest.js';
import deleteTestimonialTest from './05_deleteTestimonialTest.js';

// Html report generation for k6 tests
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";


export default function () {
    
    loginTest();
    getProfileTest();
    postTestimonialTest();
    updateTestimonialTest();
    deleteTestimonialTest();
}

export function handleSummary(data) {
    return {
        "report.html": htmlReport(data),
        stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
}