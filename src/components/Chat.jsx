import React from 'react';
import { TiVendorAndroid } from 'react-icons/ti';
import { GiAlarmClock } from 'react-icons/gi';
import { BsChatTextFill } from 'react-icons/bs';
import { MdReportGmailerrorred } from 'react-icons/md';
import img1 from './img/image1.jpg';

const Chat = () => {
  return (
    <div>
      <div className="flex justify-around pt-8">
        <div className="pt-6">
          <h5 className="text-sky-400 text-sm">CHAT & SHARE SECURELY</h5>
          <br />
          <h1 className="text-xl font-bold">
            Securely Chat &
            <br /> Share All of your's <span className="text-sky-400">Emotion</span>
          </h1>
          <br />
          <p>
            This is the way where you can easily share <br /> emotions in a secure way
          </p>
          <br />
          <button className="w-40 mt-6 flex justify-center items-center bg-black rounded-lg shadow-xl border-2 text-center mr-6 hover:shadow-2xl text-white transition-all">
            <TiVendorAndroid />
            Download now
          </button>
        </div>
        <div className="flex ">
          <img className="h-80 w-80" src={img1} alt="" />
        </div>
      </div>
      <div className="flex justify-around pt-12">
        <div>
          <GiAlarmClock className="text-sky-400 text-xl" />
          <h2 className="text-sm font-bold"> TIMELINE</h2>
          <p>
            COYO helps you to create <br /> your timeline
          </p>
        </div>
        <div>
          <BsChatTextFill className="text-sky-400 text-xl" />
          <h2 className="text-sm font-bold"> CHATING</h2>
          <p>
            COYO has securely share <br />
            chating option
          </p>
        </div>
        <div>
          <MdReportGmailerrorred className="text-sky-400 text-xl" />
          <h2 className="text-sm font-bold"> REPORTING</h2>
          <p>
            COYO is ine of the best &<br /> way for chatting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
