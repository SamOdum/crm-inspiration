import React from 'react';

const HomeTabs = () => {
  return (
    <div className="col-sm-8 col-md-9 col-xs-12">
      <div className="home-tab">
        <ul className="nav home-nav-tabs home-product-tabs">
          <li className="active">
            <a href="#featured" data-toggle="tab" aria-expanded="false">
              Featured products
            </a>
          </li>
          <li className="divider" />
          <li>
            <a href="#top-sellers" data-toggle="tab" aria-expanded="false">
              Top Sellers
            </a>
          </li>
        </ul>
        <div id="productTabContent" className="tab-content">
          <div className="tab-pane active in" id="featured">
            <div className="featured-pro">
              <div className="slider-items-products">
                <div
                  id="featured-slider"
                  className="product-flexslider hidden-buttons"
                >
                  <div className="slider-items slider-width-col4" />
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="top-sellers">
            <div className="top-sellers-pro">
              <div className="slider-items-products">
                <div
                  id="top-sellers-slider"
                  className="product-flexslider hidden-buttons"
                >
                  <div className="slider-items slider-width-col4 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;
