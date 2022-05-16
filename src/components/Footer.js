import React from 'react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">        
        <a target="_blank" rel="noreferrer" href="https://github.com/ausamindec"> 
          <FontAwesomeIcon icon={faGithub} size='2x' /> 
        </a>    
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-aminul-hoque-1235b0239" > 
          <FontAwesomeIcon icon={faLinkedin} size='2x' /> 
        </a>    
        <a target="_blank" rel="noreferrer" href="https://twitter.com/ausamindec" > 
          <FontAwesomeIcon icon={faTwitter} size='2x' /> 
        </a>  
      </div> 
    
     </footer>
  );
}

export default Footer;
