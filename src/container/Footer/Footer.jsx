import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Banja Luka BB</p>
        <p className='p__opensans'>+387 65 888 888</p>
        <p className='p__opensans'>+387 65 999 999</p>
      </div>
      <div className='app__footer-links_logo'>
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: '15px' }} />
        <div className='app__footer-links_icons '>
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>08:00 am - 12:00 pm</p>
        <p className='p__opensans'>Saturday-Sunday</p>
        <p className='p__opensans'>09:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Andrej.All Right reserved</p>
    </div>
  </div>
);

export default Footer;
