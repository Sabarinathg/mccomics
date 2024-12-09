import React, { useState } from 'react'
import './comp css/joinpage.css';
const Joinpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
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
      role: '',
      message: '',
    });
  };
  return (
    <div className='joinpage-container'>
        <h1>Join US</h1>
        <div className='join-content'>
          <p>Are you passionate about comics and storytelling? Do you have a love for bringing classic stories to life in Tamil? At Minnal Comics, we’re on a mission to share the magic of timeless comics with a new generation of readers, and we’re looking for enthusiastic and talented individuals to join us on this exciting journey!</p>

          <h1>Why Join Minnal Comics?</h1>

          <p>We’re more than a team—we’re a community of comic enthusiasts dedicated to making these stories accessible to Tamil readers. At Minnal Comics, you’ll have the opportunity to:</p>

          <ul>
              <li>Contribute to meaningful translation and adaptation projects.</li>
              <li>Work with a dedicated team of translators, editors, designers, and developers.</li>
              <li>Expand your skills and experience in an open, collaborative environment.</li>
              <li>Be a part of a project that brings joy and nostalgia to readers across the world.</li>
          </ul>

          <h1>Who We’re Looking For</h1>

          <p>We’re always excited to connect with people who share our vision. If you’re skilled or interested in any of the following roles, we’d love to hear from you!</p>
          <br />
          <p>
            <strong>Translator</strong>
            <br />
            Passionate about language and fluent in Tamil and English? Help us bring beloved stories to life through accurate, engaging translations that capture the essence of the original work.
            <br />
            <br />
            <strong>Comic Editor & Dialogue Writer</strong>
            <br />
            Do you have a knack for storytelling and dialogue writing? Join us in crafting natural, immersive dialogue that makes our translations resonate with Tamil-speaking audiences.
            <br/>
            <br />
            <strong>Designer</strong>
            <br/>
            If you have an eye for design and a passion for comics, help us create visually appealing layouts, covers, and promotional material that capture the spirit of Minnal Comics.
            <br/>
            <br />
            <strong>Developer</strong>
            <br/>
            Skilled in front-end or back-end development? Join our tech team to enhance our website’s user experience and ensure that Minnal Comics is accessible to all readers.
            <br/>
            <br />
            <strong>Support & Operations</strong>
            <br/>
            If you’re an organized, detail-oriented person, help us keep things running smoothly. From managing resources to providing team support, your role will be essential in making our projects successful.
          </p>

          <h1>Ready to Join Us?</h1>

          <p>If you’re interested in joining Minnal Comics, please reach out to us! Send an email with your name, contact information, and a brief description of your skills and experience. We’ll get in touch with you to explore how you can become part of our team.</p>
          <br />
          <p> Alternatively, fill out the form below to share your information directly with us.</p>
            <div className='join-form-container'>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="name">Your Name:</label>
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
                      <label htmlFor="email">Your Email:</label>
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
                      <label htmlFor="role">Role You’re Interested In:</label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a role</option>
                        <option value="Translator">Translator</option>
                        <option value="Comic Editor & Dialogue Writer">Comic Editor & Dialogue Writer</option>
                        <option value="Designer">Designer</option>
                        <option value="Developer">Developer</option>
                        <option value="Support & Operations">Support & Operations</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message">Why You’d Like to Join (Optional):</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ width: '100%', height: '150px', resize: 'none' }}
                      />
                    </div>
                    <button type="submit">Submit Application</button>
                  </form>
            </div>
        </div>
    </div>
  )
}

export default Joinpage