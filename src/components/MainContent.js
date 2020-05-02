import React from 'react';
import HomeTabs from './HomeTabs';
import HotDeal from './HotDeal';
import TopBanner from './TopBanner';
import SpecialProducts from './SpecialProduct';
import Testimonials from './Testimonials';
import BottomBanner from './BottomBanner';
import JvCategory from './JvCategory';

const MainContent = () => {
  return (
    <div className="main-container col1-layout">
      <div className="container">
        <div className="row">
          <HomeTabs />
          <HotDeal />
          <TopBanner />
          <SpecialProducts />
          <Testimonials />
          <BottomBanner />
          <JvCategory />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
