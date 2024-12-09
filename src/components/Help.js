import React from 'react'
import './comp css/help.css';
import { Link } from 'react-router-dom';
const Help = () => {
  return (
    <div className='help-container'>
        <h1>Help Center</h1>
        <div className='help-content'>
            <p>Welcome to the Minnal Comics Help Center! Here, we’ve compiled resources to assist you in navigating our website, accessing comics, and finding answers to common questions. If you need further assistance, please don’t hesitate to reach out.</p>
            <hr/>
            <ol>
                <li>
                    <strong>Getting Started with Minnal Comics</strong>
                    <ul>
                        <li><strong>What We Do : </strong> Minnal Comics provides free Tamil translations of classic comics to make timeless stories accessible to Tamil-speaking readers. We’re also working on publishing original comics in the near future!</li>
                        <li><strong>How to Access Comics : </strong> All comics are available on our website for reading. Simply browse our library and choose the comic you’d like to read.</li>
                        <li><strong>Compatibility : </strong> Our website is optimized for desktops, tablets, and mobile devices for easy access across platforms.</li>
                    </ul>
                </li>
                <li>
                    <strong>Common Issues</strong>
                    <ul>
                        <li><strong>Loading Problems : </strong>If a comic page isn’t loading, try refreshing the page or clearing your browser cache. If the problem persists, contact us for support.</li>
                        <li><strong>Download Restrictions : </strong>To respect the original creators, we do not offer downloads of translated comics. You can read them online for free.</li>
                        <li><strong>Account Requirements : </strong> Currently, Minnal Comics does not require an account to access our comics.</li>
                    </ul>
                </li>
                <li>
                    <strong>Contact Us for Support</strong>
                    <p>If you need help with any issues or have questions that aren’t answered here, please reach out to us via our Contact Form. Provide as much detail as possible so we can assist you promptly.</p>
                </li>
                <li>
                    <strong>Frequently Asked Questions (FAQ)</strong>
                    <p>Visit our <Link to='/faq'>FAQ Page</Link> for quick answers to common questions about Minnal Comics, our content and our future projects.</p>
                </li>
                <li>
                    <strong>Copyright Concerns</strong>
                    <p>We strive to respect the rights of original creators. If you believe any content on Minnal Comics infringes on your copyright, please use our Contact Form to notify us. Include your name, contact information, and a description of the content in question. We will review and take action as necessary.</p>
                </li>
                <li>
                    <strong>Joining Our Team</strong>
                    <p>Interested in joining Minnal Comics? Visit our Join Our Team page to learn more about available roles and how to apply. Whether you’re skilled in translation, design, development, or support, we’d love to hear from you!</p>
                </li>
            </ol>
            <p>Thank you for being a part of the Minnal Comics community! We’re here to make your experience as enjoyable and seamless as possible.</p>
        </div>
    </div>
  )
}

export default Help