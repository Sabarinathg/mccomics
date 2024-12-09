import React, { useState } from 'react'
import './comp css/contactpage.css';
const Contactpage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send form data to a backend server or an email service)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      };
    
  return (
    <div className='contact-container'>
        <h1>Contact</h1>
        <div className='contact-content'>
            <p>Thank you for visiting Minnal Comics! We’re thrilled to have you as part of our comic-loving community. Whether you have questions, feedback, or a request regarding our content, we’d love to hear from you. Our team is here to assist and ensure your experience with us is enjoyable and engaging.</p>
            <hr />
            <div className='contact-form'>
                <p>Please complete the form below, and we’ll get in touch with you shortly:</p>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Your Name :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="email">Your Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="subject">Subject :</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="message">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contactpage