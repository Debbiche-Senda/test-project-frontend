import React from 'react';
import img2 from './img/image2.png';
import { BsArrowRight } from 'react-icons/bs';

const Draw = () => {
  return (
    <div className="pt-16">
      <div className="flex justify-around pt-8">
        <div className="flex ">
          <img className="h-60 w-60" src={img2} alt="" />
        </div>
        <div className="pt-6">
          <h5 className="text-sky-400 text-sm">TIMELINE REVIEW</h5>
          <br />
          <h1 className="text-xl font-bold">
            Draw your
            <br /> Family's <span className="text-sky-400">Story</span> in Real Time
          </h1>
          <br />
          <button className="w-40 flex justify-center items-center bg-black rounded-lg shadow-xl border-2 text-center text-white">
            View More <BsArrowRight className="ml-4" />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 shadow-lg shadow-gray-100/50 mt-20 flex justify-around rounded-2xl w-auto h-32 items-center mx-14">
        <div>
          <span className="font-bold text-3xl">99%</span>
          <p> Trusted by the all end user</p>
        </div>
        <div>
          <span className="font-bold text-3xl">138</span>
          <p> Of users feel secure using by COYO</p>
        </div>
        <div>
          <span className="font-bold text-3xl">90%</span>
          <p> Market covered all over the whole world</p>
        </div>
      </div>
    </div>
  );
};

export default Draw;
