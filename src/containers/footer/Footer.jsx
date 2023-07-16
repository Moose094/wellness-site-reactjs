import React from 'react'
import './footer.css';
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <div className='wellness__footer section__padding'>
      <div className='footer__heading'>
        <h1>Do you want to live a long and happy life?</h1>

      </div>
      <div className='footer__btn'>
        <p>Join our client list</p>
      </div>
      <div className='footer-links'>
        <div className='footer-logo'>
          <img src={logo} alt='logo'></img>
          <p>12 welly drive,wellville,X0, 12222</p>
        </div>

        <div className='footer__actual-links'>
          <h4>Links</h4>
          <p>Locations</p>
          <p>People</p>
          <p>Contact us</p>
        </div>

        <div className='footer__actual-links'>
          <h4>Company</h4>
          <p>terms and conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className='footer__actual-links'>
          <h4>HQ</h4>
          <p>12 welly drive,wellville,X0, 12222</p>
          <p>230-340-0990</p>
           <p>wellness@welly.net</p>

        </div>



      </div>

    <div className='footer-copyright'>
      <p>All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
