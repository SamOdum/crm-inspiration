import React, { useContext } from 'react';
import { HomeSliderContext } from '../contexts/HomeSliderContext';
import HomeSlide from './HomeSlide';

const HomeSlider = () => {
  const [slider, ,] = useContext(HomeSliderContext);
  return (
    <div className="slider mainindex">
      <div className="tp-banner-container clearfix">
        <div className="tp-banner">
          <ul>
            <HomeSlide />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
