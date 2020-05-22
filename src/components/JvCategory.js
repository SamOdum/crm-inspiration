import React from 'react';
import img1 from '../assets/products/img10.jpg';
import img2 from '../assets/products/img10 (2).jpg';
import img3 from '../assets/products/img08.jpg';
import img4 from '../assets/products/img18 (2).jpg';
import img5 from '../assets/products/img14.jpg';
import img6 from '../assets/products/img04.jpg';
import img7 from '../assets/images/customer-service-icon.png';
import img8 from '../assets/images/shipping-icon.png';
import img9 from '../assets/images/guarantee-icon.png';
import ProductTrio from './ProductTrio';
import SingleService from './SingleService';

const topRatedData = [
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

const onSaleData = [
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

const serviceData = [
  {
    id: 1,
    name: '24/7 Customer Service',
    imageSrc: img7,
    callToAction: 'Call us 24/7',
  },
  {
    id: 2,
    name: 'Free Shipping Worldwide',
    imageSrc: img8,
    callToAction: 'On Applicable Orders',
  },
  {
    id: 3,
    name: 'Money Back Guarantee!',
    imageSrc: img9,
    callToAction: 'For Returnable Products',
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
              {topRatedData.map((topRatedDataItem) => {
                return (
                  <ProductTrio
                    data={topRatedDataItem}
                    key={topRatedDataItem.id}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="jtv-single-cat">
              <h2 className="cat-title">On Sale</h2>
              {onSaleData.map((onSaleDataItem) => {
                return (
                  <ProductTrio data={onSaleDataItem} key={onSaleDataItem.id} />
                );
              })}
            </div>
          </div>

          {/* <!-- service area start --> */}
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="jtv-service-area">
              {serviceData.map((serviceDataItem) => {
                return (
                  <SingleService
                    data={serviceDataItem}
                    key={serviceDataItem.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JvCategory;
