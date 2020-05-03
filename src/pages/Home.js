import React from 'react';
import Container from './Container';
import HomeSlide from '../components/HomeSlide';
import MainContent from '../components/MainContent';

const Home = () => {
  return (
    <Container>
      <HomeSlide />
      <MainContent />
    </Container>
  );
};

export default Home;
