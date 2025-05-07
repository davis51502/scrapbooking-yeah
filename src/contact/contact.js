import React, { useRef } from 'react'
import './contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const formRef = useRef(null);
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "40b17770-8349-4561-aee6-4f9a8ffc5084");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
            formRef.current.reset();
        }
    };

    return (
        <section className="contact">
            <form ref={formRef} onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        className="field" 
                        placeholder='Enter your name' 
                        name='name'
                        id="name"
                        autoComplete="name"
                        required 
                    />
                </div>
                <div className='input-box'>
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        className="field" 
                        placeholder='Enter your email' 
                        name='email'
                        id="email"
                        autoComplete="email"
                        required 
                    />
                </div>
                <div className='input-box'>
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        name="message"
                        id="message"
                        className="field mess" 
                        placeholder='Type your message here'
                        autoComplete="off"
                        required
                    ></textarea>
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    );
};

export default Contact;