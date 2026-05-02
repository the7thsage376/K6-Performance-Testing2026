export const URLs ={
    login: "https://www.ndosiautomation.co.za/APIDEV/login",
    profile: "https://www.ndosiautomation.co.za/APIDEV/profile",
    post_testimonial:"https://www.ndosiautomation.co.za/APIDEV/testimonials",

    // AI assistance to save the id from the requests for update and delete testimonials
    update_testimonial: (id) => `https://www.ndosiautomation.co.za/APIDEV/testimonials/${id}`,
    delete_testimonial: (id) => `https://www.ndosiautomation.co.za/APIDEV/testimonials/${id}`
    
}