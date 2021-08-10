import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faGithubAlt, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    return (
        <div className="contact-form">
          <span>04. What's Next?</span>
            <h2>Get in touch</h2>
            <p>I am currently open to any new opportunity as an intern or junior frontend developer.
              Don't hesitate to send a message.
            </p>
            
            <a className="contact-btn" href="mailto:hoganevelyn5@gmail.com">
            <button type="submit"> Say Hello  </button>
            </a>
          
  
            <div className="icons">

              <a href="https://github.com/yvehogan">
<FontAwesomeIcon icon={faGithubAlt } />
</a>

                <a href="https://www.linkedin.com/in/evelyn-hogan-8aab85145">
<FontAwesomeIcon icon={faLinkedin } />
</a>

                <a href="https://twitter.com/yveHogan?s=08">
                  <FontAwesomeIcon icon={faTwitter } />
                    </a>

                    <a href="https://facebook.com/Evehog">
                        <FontAwesomeIcon icon={faFacebook }/>
                            </a> 
                        <p>hoganevelyn5@gmail.com</p>
                        </div>
   
        </div>
    )
}

export default Contact;



