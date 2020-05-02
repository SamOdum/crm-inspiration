import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeProvider } from '../contexts/HomeContext';
import Header from './Header';
import HomeSlide from './HomeSlide';
import HomeSliderProvider from '../contexts/HomeSliderContext';
import Footer from './Footer';
import '../styles/App.scss';
import MainContent from './MainContent';

function App() {
  return (
    <Router>
      <HomeProvider>
        <HomeSliderProvider>
          <Header />
          <HomeSlide />
          <MainContent />
          <Footer />
        </HomeSliderProvider>
      </HomeProvider>
    </Router>
  );
}

export default App;
