import React from 'react';
import Chat from '../components/Chat';
import Clients from '../components/Clients';
import Draw from '../components/Draw';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Chat />
      <Draw />
      <Clients />
      <Footer />
    </>
  );
};

export default HomePage;
