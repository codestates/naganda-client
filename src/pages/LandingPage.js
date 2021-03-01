import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import SearchBanner from '../components/SearchBanner';
import Recommended from '../components/Recommended';
import IntroDesc from '../components/IntroDesc';
import Footer from '../components/Footer';

const LandingPage = () => {
  const onScroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <SearchBanner />
      <Recommended />
      <IntroDesc />
      <Footer />
    </div>
  );
};

export default LandingPage;
