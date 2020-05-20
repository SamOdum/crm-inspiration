import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from '../assets/products/img01.jpg';
import img2 from '../assets/products/img02 (2).jpg';
import img3 from '../assets/products/img02.jpg';
import img4 from '../assets/products/img03 (2).jpg';
import img5 from '../assets/products/img03.jpg';
import img6 from '../assets/products/img04 (2).jpg';
import img7 from '../assets/products/img04.jpg';
import img8 from '../assets/products/img05 (2).jpg';
import StarRating from './StarRating';

const featuredItems = [
  {
    id: 1,
    title: 'Logitech Mouse',
    image: img1,
    product: '/product/detail/16/Logitech-Mouse',
    regularPrice: 89977.0,
    salePrice: 854.05,
    discount: '-5%',
    rating: 5,
  },
  {
    id: 2,
    title: 'Tempting T-Shirt',
    image: img2,
    product: '/product/detail/11/Tempting-T-Shirte',
    regularPrice: 899.0,
    salePrice: null,
    discount: null,
    rating: 3,
  },
  {
    id: 3,
    title: 'Washer Pro',
    image: img3,
    product: '/product/detail/11/washer-pro',
    regularPrice: 48525,
    salePrice: 42550,
    discount: '-2%',
    rating: 4,
  },
  {
    id: 4,
    title: 'Awesome Phone',
    image: img4,
    product: '/product/detail/11/awesome-phone',
    regularPrice: 1450,
    salePrice: null,
    discount: null,
    rating: 2,
  },
  {
    id: 5,
    title: 'Cool Gadget',
    image: img5,
    product: '/product/detail/11/cool-gadget',
    regularPrice: 5580,
    salePrice: 4150,
    discount: '-12%',
    rating: 5,
  },
];

const FeaturedProducts = ({ style }) => {
  return (
    <div className="tab-pane in" id="featured" style={style}>
      <div className="featured-pro">
        <div className="slider-items-products">
          <div
            id="featured-slider"
            className="product-flexslider hidden-buttons"
          >
            <OwlCarousel
              items={3}
              className="owl-theme slider-items slider-width-col4"
              loop
              nav
              margin={8}
              autoplay
            >
              {featuredItems.map((item) => {
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
                              <div className="rating-container">
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
{' '}
                                    </p>
                                    <p className="old-price">
                                      {' '}
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
              <div className="owl-controls clickable">
                {/* <div className="owl-buttons">
                  <div className="owl-prev">
                    <a className="flex-prev" />
                  </div>
                  <div className="owl-next">
                    <a className="flex-next" />
                  </div>
                </div> */}
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
