import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebookF,faGithub,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
      <section className="flex flex-col gap-5 w-full bg-gray-600 items-center justify-center p-5">
          <div className="flex flex-row gap-5">

              <FontAwesomeIcon icon={faFacebookF} size="2x" color="white" className="cursor-pointer hover:text-blue-500 hover:scale-120 transition-all duration-150" />
              <FontAwesomeIcon icon={faGithub}  size="2x" color="white" className="cursor-pointer hover:text-black hover:scale-120 transition-all duration-150" />
              <a href="https://www.linkedin.com/in/martin-lap%C5%A1ansk%C3%BD-97a52a26b/">
                  <FontAwesomeIcon  icon={faLinkedin}  size="2x" color="white"  className="cursor-pointer hover:text-blue-500 hover:scale-120 transition-all duration-150"/>
              </a>
              <FontAwesomeIcon icon={faInstagram}  size="2x" color="white" className="cursor-pointer hover:text-[#6228d7] hover:scale-120 transition-all duration-150" />
          </div>
      </section>


  );
};

export default Footer;