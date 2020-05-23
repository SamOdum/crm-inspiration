import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

import img1 from '../assets/products/img05.jpg';
import img2 from '../assets/products/img07 (2).jpg';
import img3 from '../assets/products/img11.jpg';

const bestSellerData = [
  {
    id: 1,
    image: img1,
    link: '/product/detail/24/kids-study-tablet',
    name: "Kid's Study Tablets",
    price: 14000,
    rating: 5,
  },
  {
    id: 2,
    image: img2,
    link: '/product/detail/24/genuine-oxfords',
    name: 'Genuine Oxfords',
    price: 22000,
    rating: 5,
  },
  {
    id: 3,
    image: img3,
    link: '/product/detail/24/bose-srB2',
    name: 'Bose Speaker Bar',
    price: 29000,
    rating: 5,
  },
];

/**
 * Renders a <BestSellerItem /> component
 * @param  {object} props
 * @param  {string|number} props.id - Product Id
 * @param  {string} props.image - Product display image
 * @param  {string} props.link - Link to product detail
 * @param  {string} props.name - Product name
 * @param  {number} props.price - Product price
 * @param  {number} props.rating - Product rating
 */
const BestSellerItem = ({ productData }) => {
  return (
    <li className="menu-item depth-1 product menucol-1-3 withimage">
      <div className="product-item">
        <div className="item-inner">
          <div className="product-thumbnail">
            <div className="pr-img-area">
              <a title={productData.name} href={productData.link}>
                <figure className="">
                  <img
                    className="first-img mainlazy"
                    src={productData.image}
                    data-src={productData.image}
                    alt={productData.name}
                  />

                  <img
                    className="hover-img mainlazy"
                    src={productData.image}
                    data-src={productData.image}
                    alt={productData.name}
                  />
                </figure>
              </a>
              <button
                type="button"
                className="add-to-cart-mt addtocart"
                value={productData.id}
              >
                <i className="fa fa-shopping-cart" />
                <span> Add to Cart</span>
              </button>
            </div>
            <div className="pr-info-area">
              <div className="pr-button">
                <div className="mt-button add_to_wishlist">
                  <a
                    href="#jsdheoo"
                    title="Add to Wishlist"
                    data-placement="top"
                    data-container="body"
                    data-toggle="tooltip"
                  >
                    <i className="fa fa-heart" />
                  </a>
                  <input type="hidden" value={productData.id} />
                </div>
                <div className="mt-button add_to_compare">
                  <a
                    href="#jsdheoo"
                    title="Add to Comparelist"
                    data-placement="top"
                    data-container="body"
                    data-toggle="tooltip"
                  >
                    <i className="fa fa-signal" />
                  </a>
                  <input type="hidden" value={productData.id} />
                </div>
                <div className="mt-button quick-view">
                  <a
                    href={productData.link}
                    title="View Item"
                    data-placement="top"
                    data-container="body"
                    data-toggle="tooltip"
                  >
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="item-info">
            <div className="info-inner">
              <div className="item-title">
                <a title={productData.name} href={productData.link}>
                  {productData.name}
                </a>
              </div>
              <div className="item-content">
                <div className="rating">
                  <div className="rating-container">
                    <StarRating
                      owner={productData.id}
                      readOnly
                      ratingV={productData.rating}
                    />
                  </div>
                </div>
                <div className="item-price">
                  <div className="price-box">
                    <span className="regular-price">
                      <span className="price">{`₦${productData.price}`}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const BestSeller = () => {
  return (
    <ul className="menu-items col-xs-12">
      {bestSellerData.map((bestSellerDataItem) => {
        return (
          <BestSellerItem
            productData={bestSellerDataItem}
            key={bestSellerDataItem.id}
          />
        );
      })}
    </ul>
  );
};

BestSellerItem.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default BestSeller;
