import React from 'react';
import { BsArrowRight, BsTwitter } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';
import { TiSocialLinkedin } from 'react-icons/ti';

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center pt-8">
        <div className="pt-6">
          <h5 className="text-sky-400 text-sm">ADD US TO THE NEWSLETTER</h5>
          <br />
          <h1 className="text-xl font-bold">
            Share & save photos, videos <br /> confindicially
          </h1>
          <br />
          <button className="w-40 flex justify-center items-center bg-black rounded-lg shadow-xl border-2 text-center text-white">
            View More <BsArrowRight className="ml-4" />
          </button>
        </div>
      </div>
      <div className="flex justify-center space-x-12 pr-24 pb-10 pt-6">
        <RiFacebookFill />
        <BsTwitter />
        <TiSocialLinkedin />
      </div>
    </div>
  );
};

export default Footer;
