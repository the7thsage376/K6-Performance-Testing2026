import http from 'k6/http';
import { URLs } from '../config/urls.js';
import { HEADERS } from '../config/constant.js';


export function deleteTestimonialRequest(token, id){

    const url = URLs.delete_testimonial(id);
   
     const headers = {
                ...HEADERS.json, 
                'Authorization': `Bearer ${token}` 
            };
    

    return http.del(url, null, { headers });
}