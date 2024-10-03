import React from 'react';
import img1 from '../assets/images/Logo and adress.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook, faTwitter, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='w-full bg-[#92C7FF] py-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex justify-center md:justify-start'>
            <img src={img1} alt='Logo and Address' className='w-auto h-auto max-w-full' />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            <div className='space-y-4'>
              <p className='font-Opensans font-bold text-base text-white'>Home</p>
              <p className='font-Opensans font-normal text-base text-white'>About Us</p>
              <p className='font-Opensans font-normal text-base text-white'>Our Services</p>
              <p className='font-Opensans font-normal text-base text-white'>Benefit</p>
            </div>
            <div className='space-y-4'>
              <p className='font-Opensans font-bold text-base text-white'>Platform</p>
              <p className='font-Opensans font-normal text-base text-white'>Terms of Use</p>
            </div>
            <div className='space-y-4'>
              <p className='font-Opensans font-bold text-base text-white'>Social Media</p>
              <div className='flex space-x-4'>
                <FontAwesomeIcon icon={faFacebook} className='text-white text-lg' />
                <FontAwesomeIcon icon={faInstagram} className='text-white text-lg' />
                <FontAwesomeIcon icon={faTwitter} className='text-white text-lg' />
                <FontAwesomeIcon icon={faLinkedin} className='text-white text-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
