import React, { useState } from 'react';
import TopSellers from './TopSellers';
import FeaturedProducts from './FeaturedProducts';

const HomeTabs = () => {
  const [fstate, setFstate] = useState({
    activef: true,
    activet: false,
  });

  const showf = () => {
    return setFstate({ activef: true, activet: false });
  };
  const showt = () => {
    return setFstate({ activet: true, activef: false });
  };

  return (
    <div className="col-sm-8 col-md-9 col-xs-12">
      <div className="home-tab">
        <ul className="nav home-nav-tabs home-product-tabs">
          <li className={fstate.activef ? 'active' : ''}>
            <a
              href="/#fstatt"
              data-toggle="tab"
              aria-expanded="false"
              onClick={showf}
            >
              Featured products
            </a>
          </li>
          <li className="divider" />
          <li className={fstate.activet ? 'active' : ''}>
            <a
              href="/#tstatt"
              data-toggle="tab"
              aria-expanded="false"
              onClick={showt}
            >
              Top Sellers
            </a>
          </li>
        </ul>
        <div className="tab-content" id="productTabContent">
          <FeaturedProducts
            style={fstate.activef ? { display: 'block' } : { display: 'none' }}
          />
          <TopSellers
            style={fstate.activef ? { display: 'none' } : { display: 'block' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;
