import React from 'react';

const BottomBanner = () => {
  return (
    <div className="bottom-banner-section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <a href="#152i" className="bottom-banner-img">
              <img
                className="mylazy"
                src="https://via.placeholder.com/360x240.png"
                data-src="decideLater"
                alt="5b83d54a70bdf.jpg"
              />

              <span className="banner-overly" />
              <div className="bottom-img-info">
                <h3>Electronic</h3>
                <h6>This is excellent</h6>
                <span className="shop-now-btn">Shop Now!</span>
              </div>
            </a>
          </div>
          <div className="col-md-8 col-sm-8">
            <a href="#152i" className="bottom-banner-img last">
              <img
                className="mylazy"
                src="https://via.placeholder.com/750x240.png"
                data-src="decideLater"
                alt="5b83d56f7f9f8.jpg"
              />

              <span className="banner-overly last" />
              <div className="bottom-img-info last">
                <h3>New collection</h3>
                <h6>Excellent for every one</h6>
                <span className="shop-now-btn">Show Now!</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
