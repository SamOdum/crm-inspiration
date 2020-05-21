import React from 'react';

const Clients = () => {
  return (
    <div className="col-md-6">
      <div className="our-clients">
        <div className="slider-items-products">
          <div
            id="our-clients-slider"
            className="product-flexslider hidden-buttons"
          >
            <div className="slider-items slider-width-col6">
              {/* Item start */}
              <div className="item">
                <a href="javascript:void(0)">
                  <img
                    className="brand-img mylazy"
                    src="/loading.gif"
                    data-src="https://system.multecart.com/attachments/brand/5b97deb711674.png"
                    alt="Samsung"
                  />
                </a>

                <br />
                <a href="javascript:void(0)">
                  <img
                    className="brand-img mylazy"
                    src="/loading.gif"
                    data-src="https://system.multecart.com/attachments/brand/5b97dec68eec2.png"
                    alt="LG"
                  />
                </a>
                <br />
                <a href="javascript:void(0)">
                  <img
                    className="brand-img mylazy"
                    src="/loading.gif"
                    data-src="https://system.multecart.com/attachments/brand/5b97df24dd284.png"
                    alt="IFB"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
