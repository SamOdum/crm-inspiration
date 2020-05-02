import React from 'react';

const JvCategory = () => {
  return (
    <div className="jtv-category-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="jtv-single-cat">
              <h2 className="cat-title">Top Rated</h2>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="jtv-single-cat">
              <h2 className="cat-title">On Sale</h2>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="jtv-service-area">
              <div className="jtv-single-service">
                <div className="service-icon">
                  <img
                    alt="24/7 Customer Service"
                    src="images/customer-service-icon.png"
                  />
                </div>
                <div className="service-text">
                  <h2>24/7 Customer Service</h2>
                  <p>
                    <span>Call us 24/7</span>
                  </p>
                </div>
              </div>
              <div className="jtv-single-service">
                <div className="service-icon">
                  <img
                    alt="Free Shipping Worldwide"
                    src="images/shipping-icon.png"
                  />
                </div>
                <div className="service-text">
                  <h2>Free Shipping Worldwide</h2>
                  <p>
                    <span>On Applicable Orders</span>
                  </p>
                </div>
              </div>
              <div className="jtv-single-service">
                <div className="service-icon">
                  <img
                    alt="Money Back Guarantee!"
                    src="images/guaratee-icon.png"
                  />
                </div>
                <div className="service-text">
                  <h2>Money Back Guarantee!</h2>
                  <p>
                    <span>For Returnable Products</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JvCategory;
