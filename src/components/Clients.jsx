import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import img3 from './img/image3.jpg';

const Clients = () => {
  return (
    <div className="pt-16">
      <p className="text-center">
        More than <span className="text-sky-400 text-xl font-bold">60K+</span> trusted client are connected with us{' '}
      </p>
      <div className="flex justify-center space-x-5 pt-6">
        <span className="font-bold text-2xl">facebook</span>
        <span className="font-bold text-2xl">adidas</span>
        <span className="font-bold text-2xl">Google</span>
        <span className="font-bold text-2xl">Crayola</span>
        <span className="font-bold text-2xl">Careem</span>
      </div>

      <div className="flex justify-around pt-14">
        <div className="pt-6">
          <h5 className="text-sky-400 text-sm">PRIVACY POLICY</h5>
          <br />
          <h1 className="text-xl font-bold">
            Have a <br /> Bundle of
            <span className="text-sky-400"> Gifts</span> in Each of the Review
          </h1>
          <br />
          <button className="w-40 flex justify-center items-center bg-black rounded-lg shadow-xl border-2 text-center text-white">
            View More <BsArrowRight className="ml-4" />
          </button>
        </div>
        <div className="flex ">
          <img className="h-60 w-60" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
