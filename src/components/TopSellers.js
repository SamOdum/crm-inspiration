import React from 'react';
import PropTypes from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from '../assets/products/img17.jpg';
import img2 from '../assets/products/img08 (2).jpg';
import img3 from '../assets/products/img03.jpg';
import img4 from '../assets/products/img09 (2).jpg';
import img5 from '../assets/products/img07.jpg';
import img6 from '../assets/products/img04 (2).jpg';
// import img7 from '../assets/products/img02.jpg';
// import img8 from '../assets/products/img05 (2).jpg';
import StarRating from './StarRating';

const topSellingItems = [
  {
    id: 1,
    title: 'Crescent Light',
    image: img1,
    product: '/product/detail/16/Crescent-Light',
    regularPrice: 7800,
    salePrice: 5650,
    discount: '-14%',
    rating: 5,
  },
  {
    id: 2,
    title: 'Snakeskin Belt',
    image: img2,
    product: '/product/detail/11/Swagger-Clutch',
    regularPrice: 4750,
    salePrice: 4000,
    discount: '-2%',
    rating: 5,
  },
  {
    id: 3,
    title: 'Hp Pro',
    image: img3,
    product: '/product/detail/11/hp-pro',
    regularPrice: 98525,
    salePrice: 80550,
    discount: '-3%',
    rating: 4,
  },
  {
    id: 4,
    title: 'Swagger Clutch',
    image: img4,
    product: '/product/detail/11/awesome-phone',
    regularPrice: 1450,
    salePrice: null,
    discount: null,
    rating: 5,
  },
  {
    id: 5,
    title: 'Smart Time',
    image: img5,
    product: '/product/detail/11/smart-time',
    regularPrice: 7280,
    salePrice: 4150,
    discount: '-12%',
    rating: 4,
  },
  {
    id: 6,
    title: 'Enchanted Top',
    image: img6,
    product: '/product/detail/11/enchanted-red',
    regularPrice: 3280,
    salePrice: 2150,
    discount: '-3%',
    rating: 5,
  },
];

const TopSellers = ({ style }) => {
  return (
    <div className="tab-pane in" id="top-sellers" style={style}>
      <div className="top-sellers-pro">
        <div className="slider-items-products">
          <div
            id="top-sellers-slider"
            className="product-flexslider hidden-buttons"
          >
            <OwlCarousel
              items={3}
              className="owl-theme"
              loop
              nav
              margin={8}
              autoplay
            >
              {topSellingItems.map((item) => {
                return (
                  <div className="product-item" key={item.id}>
                    <div className="item-inner">
                      <div className="product-thumbnail">
                        {item.discount && (
                          <div className="icon-sale-label sale-left">
                            {item.discount}
                          </div>
                        )}
                        <div className="pr-img-area">
                          <a title={item.title} href={item.product}>
                            <figure className="">
                              <img
                                className="first-img mylazy"
                                src={item.image}
                                data-src={item.image}
                                alt={item.title}
                              />
                              <img
                                className="hover-img mylazy"
                                src={item.image}
                                data-src={item.image}
                                alt={item.title}
                              />
                            </figure>
                          </a>
                          <button
                            type="button"
                            className="add-to-cart-mt addtocart"
                            value="16"
                          >
                            <i className="fa fa-shopping-cart" />
                            <span> Add to Cart</span>
                          </button>
                        </div>
                        <div className="pr-info-area">
                          <div className="pr-button">
                            <div className="mt-button add_to_wishlist">
                              <a
                                href="#uosmmdksn"
                                title="Add to Wishlist"
                                data-placement="top"
                                data-container="body"
                                data-toggle="tooltip"
                              >
                                <i className="fa fa-heart" />
                              </a>
                              <input type="hidden" value="16" />
                            </div>
                            <div className="mt-button add_to_compare">
                              <a
                                href="#uosmmdksn"
                                title="Add to Comparelist"
                                data-placement="top"
                                data-container="body"
                                data-toggle="tooltip"
                              >
                                <i className="fa fa-signal" />
                              </a>
                              <input type="hidden" value="16" />
                            </div>
                            <div className="mt-button quick-view">
                              <a
                                href={item.product}
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
                            <a title={item.title} href={item.product}>
                              {item.title}
                            </a>
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="rating-container ">
                                <StarRating
                                  ownerId={item.id}
                                  readOnly
                                  ratingV={item.rating}
                                />
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                {item.salePrice ? (
                                  <>
                                    <p className="special-price">
                                      <span className="price-label">
                                        Special Price
                                      </span>

                                      <span className="price">
                                        {`₦${item.salePrice}`}
                                      </span>
                                      {'  '}
                                    </p>
                                    <p className="old-price">
                                      {'  '}
                                      <span className="price-label">
                                        Regular Price:
                                      </span>

                                      <span className="price">
                                        {`₦${item.regularPrice}`}
                                      </span>
                                    </p>
                                  </>
                                ) : (
                                  <p className="special-price">
                                    <span className="price-label">Price</span>

                                    <span className="price">
                                      {`₦${item.regularPrice}`}
                                    </span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

TopSellers.propTypes = {
  style: PropTypes.shape({ display: PropTypes.string }).isRequired,
};

export default TopSellers;
