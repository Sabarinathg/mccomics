import React from 'react'
import './comp css/aboutpage.css';
import mem1 from '../images/dimingalam logo.png';
import mem2 from '../images/shadow logo.png';
import mem3 from '../images/yaazhi logo.png';

const Aboutpage = () => {
  return (
    <div className='about-container'>
        <h1>About US</h1>
        <div className='about-content'>
            <div className='aboutus'>
                <h3>Welcome to Minnal Comics!</h3>
                <p>At Minnal Comics, we are a passionate community of comic enthusiasts on a mission to bridge the gap between classic comics and a broader audience through translation. Our journey began with a shared love for storytelling and a deep commitment to making these beloved tales accessible to all.
                We believe that stories have the unique power to transcend languages, cultures, and generations. With every comic we translate, we strive to capture the essence of the original work while ensuring that the magic of these narratives shines through in Tamil.
                Please note that the comics shared on this website are not owned by us. We are dedicated solely to the translation and sharing of these works for free, with no commercial intent. All rights to the original content remain with their respective creators and copyright holders.
                Join us on this exciting journey as we celebrate the art of comics and bring timeless stories to life in Tamil for everyone to enjoy!
                </p>
            </div>
            <div className='meet-team'>
                <h3>Meet Our Team</h3>
                <p>At Minnal Comics, our dedicated team is the heart of our mission. We are three passionate comic enthusiasts, each bringing our unique skills and experiences to the project.</p>
                <div className='team-member'>
                    <div class="flip-card" tabIndex="0">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={mem1} alt='mem' />
                            </div>
                            <div class="flip-card-back">
                                <p>Name : Thimingalam</p>
                                <p>Role : Translator, Dialogue Writer & Editor</p>
                                <p>As the heart of Minnal Comics' translation process, Thimingalam brings Tamil adaptations of beloved classics to life. Skilled in both translating and crafting dialogues, Thimingalam captures the essence of each story while making it resonate with Tamil readers. Their meticulous editing ensures every comic flows naturally, making for an immersive reading experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" tabIndex="0">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={mem2} alt='mem' />
                            </div>
                            <div class="flip-card-back">
                                <p>Name : Shadow</p>
                                <p>Role : Developer, Designer, and Writer</p>
                                <p>Shadow combines technical expertise with a creative touch, handling both the design and development of Minnal Comics. From building the website's structure to creating an engaging user experience, Shadow ensures that every comic is beautifully presented and easy to access. As a writer, they also contribute to the narrative elements of the site, enhancing the overall storytelling journey for readers.</p>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card" tabIndex="0">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                            <img src={mem3} alt='mem' className='yaaz' />
                            </div>
                            <div class="flip-card-back">
                                <p>Name : Yaazhi</p>
                                <p>Role : Support</p>
                                <p>Yaazhi is the backbone of Minnal Comics, ensuring smooth operations behind the scenes. From managing resources to assisting the team wherever needed, Yaazhi’s support keeps everything running seamlessly. Their dedication helps bring the team's vision to life, making it possible for readers to enjoy Tamil-translated comics without interruption.</p>
                            </div>
                        </div>
                    </div>
                </div>    
                <p>Together, we are committed to making classic comics accessible to Tamil readers, ensuring that each translation captures the essence and excitement of the original stories. We believe in the power of collaboration and are thrilled to share our love for comics with you!
                </p>
            </div>
            <div className='content-removal'>
                <h3>Request to Remove Content</h3>
                <p>If you believe that any content on our website infringes on your rights or if you would like to request the removal of any material, please reach out to us. We are committed to respecting the rights of all creators and copyright holders.</p>
                <br />
                <p>To submit your request, please fill out our <a href=' '>Contact Form</a> with the necessary details, including:
                    <ul>
                        <li> Your name</li>
                        <li> Your email address</li>
                        <li>A description of the content you wish to have removed</li>
                        <li>The reason for your request</li>
                    </ul>
                </p>
                <br />
                <p>We will review your request promptly and take appropriate action in accordance with copyright laws and our commitment to respecting original creators. Thank you for your understanding and support!</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutpage