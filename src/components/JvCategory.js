import React from 'react';
import img1 from '../assets/products/img10.jpg';
import img2 from '../assets/products/img10 (2).jpg';
import img3 from '../assets/products/img08.jpg';
import img4 from '../assets/products/img18 (2).jpg';
import img5 from '../assets/products/img14.jpg';
import img6 from '../assets/products/img04.jpg';
import ProductTrio from './ProductTrio';

const topRated = [
  {
    id: 1,
    name: 'Bose HD135',
    link: '/products/123',
    priImageSrc: img1,
    secImageSrc: img1,
    regularPrice: 4400,
    specialPrice: null,
  },
  {
    id: 2,
    name: 'Pink Classic',
    link: 'products/124',
    priImageSrc: img2,
    secImageSrc: img2,
    regularPrice: 10000,
    specialPrice: null,
  },
  {
    id: 3,
    name: 'Glaze Washer Pro',
    link: 'product/125',
    priImageSrc: img3,
    secImageSrc: img3,
    regularPrice: 72000,
    specialPrice: null,
  },
];

const onSale = [
  {
    id: 4,
    name: 'Channel Time-mark',
    link: 'product/126',
    priImageSrc: img4,
    secImageSrc: img4,
    regularPrice: 25000,
    specialPrice: 19000,
  },
  {
    id: 5,
    name: 'Canon DSLr 2547x',
    link: 'product/126',
    priImageSrc: img5,
    secImageSrc: img5,
    regularPrice: 179000,
    specialPrice: 150000,
  },
  {
    id: 6,
    name: 'LG Tallboy',
    link: 'product/127',
    priImageSrc: img6,
    secImageSrc: img6,
    regularPrice: 33000,
    specialPrice: 29500,
  },
];

const JvCategory = () => {
  return (
    <div className="jtv-category-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="jtv-single-cat">
              <h2 className="cat-title">Top Rated</h2>
              {topRated.map((topRatedItem) => {
                return (
                  <ProductTrio data={topRatedItem} key={topRatedItem.id} />
                );
              })}
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="jtv-single-cat">
              <h2 className="cat-title">On Sale</h2>
              {onSale.map((onSaleItem) => {
                return <ProductTrio data={onSaleItem} key={onSaleItem.id} />;
              })}
            </div>
          </div>

          {/* <!-- service area start --> */}
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="jtv-service-area">
              {/* <!-- jtv-single-service start --> */}

              <div className="jtv-single-service">
                <div className="service-icon">
                  <img
                    alt="24/7 Customer Service"
                    src="/images/customer-service-icon.png"
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
                    src="/images/shipping-icon.png"
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
                    src="/images/guaratee-icon.png"
                  />
                </div>
                <div className="service-text">
                  <h2>Money Back Guarantee!</h2>
                  <p>
                    <span>For Returnable Products</span>
                  </p>
                </div>
              </div>

              {/* <!-- jtv-single-service end -->  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JvCategory;
