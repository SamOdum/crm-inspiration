import React from 'react';

const TopBanner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 col-xs-12">
          <div className="jtv-banner-box banner-inner">
            <div className="image">
              <a className="jtv-banner-opacity" href="#121">
                <img
                  className="mylazy"
                  src="https://via.placeholder.com/370x570.png"
                  data-src="https://via.placeholder.com/370x570.png"
                  alt="45b979e2fc27ed.jpg"
                />
              </a>
            </div>
            <div className="jtv-content-text">
              <h3 className="title">Save Upto 25%</h3>
              <span className="sub-title">Nice & Cleans</span>
            </div>
          </div>
        </div>

        <div className="col-sm-5 col-xs-12">
          <div className="jtv-banner-box">
            <div className="image">
              <a className="jtv-banner-opacity" href="#121">
                <img
                  className="mylazy"
                  src="https://via.placeholder.com/470x570.png"
                  data-src="https://via.placeholder.com/470x570.png"
                  alt="5b83d29356c27.jpg"
                />
              </a>
            </div>
            <div className="jtv-content-text">
              <h3 className="title">Powerful Stereo Sound</h3>
              <span className="sub-title">You&apos;re future in the sound</span>

              <a href="#121" className="button">
                BUY NOW
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-xs-12">
          <div className="jtv-banner-box banner-inner">
            <div className="image">
              <a className="jtv-banner-opacity" href="#121">
                <img
                  className="mylazy"
                  src="https://via.placeholder.com/270x270.png"
                  data-src="https://via.placeholder.com/270x270.png"
                  alt="5b83d3272f6fa.jpg"
                />
              </a>
            </div>
            <div className="jtv-content-text">
              <h3 className="title">NEW ARRIVAL</h3>
            </div>
          </div>

          <div className="jtv-banner-box banner-inner">
            <div className="image ">
              <a className="jtv-banner-opacity" href="#121">
                <img
                  className="mylazy"
                  src="https://via.placeholder.com/270x270.png"
                  data-src="https://via.placeholder.com/270x270.png"
                  alt="5b83d39444a66.jpg"
                />
              </a>
            </div>
            <div className="jtv-content-text">
              <h3 className="title">ACCESSORIES</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
