import { check } from 'k6';

export function validateResponse(response){
    return check(response, {
        'status is 200': (res) => res.status === 200,
       
        'body is not empty': (res) => res.body.length > 0

    });
}

// come back to add a few more validations 