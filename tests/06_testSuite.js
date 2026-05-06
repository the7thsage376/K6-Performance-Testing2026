import loginTest from './01_loginTest.js';
import getProfileTest from './02_getProfileTest.js';
import postTestimonialTest from './03_postTestimonialTest.js';
import updateTestimonialTest from './04_updateTestimonialTest.js';
import deleteTestimonialTest from './05_deleteTestimonialTest.js';

export default function () {
    // You can call them sequentially here
    loginTest();
    getProfileTest();
    postTestimonialTest();
    updateTestimonialTest();
    deleteTestimonialTest();
}