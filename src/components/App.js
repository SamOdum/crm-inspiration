import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeProvider } from '../contexts/HomeContext';
import Header from './Header';
import HomeSlider from './HomeSlider';
import HomeSliderProvider from '../contexts/HomeSliderContext';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <HomeProvider>
        <HomeSliderProvider>
          <Header />
          <HomeSlider />
          <Footer />
        </HomeSliderProvider>
      </HomeProvider>
    </Router>
  );
}

export default App;
