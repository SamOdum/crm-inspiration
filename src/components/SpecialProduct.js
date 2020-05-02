import React from 'react';

const SpecialProducts = () => {
  return (
    <div className="container">
      <div className="special-products">
        <div className="page-header">
          <h2>Special Products</h2>
        </div>
        <div className="special-products-pro">
          <div className="slider-items-products">
            <div
              id="special-products-slider"
              className="product-flexslider hidden-buttons"
            >
              <div className="slider-items slider-width-col4"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
