import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <h2 className='ll'>Logo</h2>
      <div className='secc'>
      <div className='f f1'>
        <address>
          XX xxx xx<br />
          XXXXX, XX 12345<br />
          USA<br />
          Phone: +1 XXX XXX XXXX<br />
          Email: Contactus@XXXX.com
        </address></div>
         <div className='f f2'> <ul>
          <li>Solutions</li>
          <li>Blog</li>
          <li>Testimonials</li>
          <li>Case Studies</li>
        </ul></div>   
        <div className="f f3">
        <ul>
          <li>Alliances and Partners</li>
          <li>Clientele List</li>
          <li>Diversity and Inclusion</li>
        </ul>
      </div>    
      </div>
      <hr className="solid-line" />
<div className='lastsecc'>
  
<div className='social-icons'>
<FontAwesomeIcon icon={faFacebook} className='soca' />
    <FontAwesomeIcon icon={faInstagram} className='soca'/>
    <FontAwesomeIcon icon={faTwitter} className='soca'/>
    <FontAwesomeIcon icon={faYoutube} className='soca'/>
    <FontAwesomeIcon icon={faLinkedin} className='soca'/>


</div>
<div className='copyright'>
<p className='copa'>&copy; 2024 All rights reserved.</p>
</div>
</div>
    </div>
  )
}

export default Footer

