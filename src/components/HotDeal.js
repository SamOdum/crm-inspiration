import React from 'react';
import tv from '../assets/products/16_small.jpg';
import StarRating from './StarRating';
import img8 from '../assets/products/img05 (2).jpg';

const HotDeal = () => {
  return (
    <div className="col-md-3 col-sm-4 col-xs-12 hot-products">
      <div className="hot-deal">
        <span className="title-text">Hot deal</span>
        <ul className="products-grid">
          <li className="item">
            <div className="product-item">
              <div className="item-inner">
                <div className="product-thumbnail">
                  <div className="icon-sale-label sale-left">-15%</div>
                  <div className="icon-hot-label hot-right">Hot</div>
                  <div className="pr-img-area">
                    <a
                      title="Samsung LED TV"
                      href="/product/detail/20/Samsung-LED-TV"
                    >
                      <figure>
                        <img
                          className="first-img mylazy"
                          src={tv}
                          data-src={tv}
                          alt="Samsung LED TV"
                        />
                        <img
                          className="hover-img mylazy"
                          src={tv}
                          data-src={tv}
                          alt="Samsung LED TV"
                        />
                      </figure>
                    </a>
                    <button
                      type="button"
                      className="add-to-cart-mt addtocart"
                      value="20"
                    >
                      <i className="fa fa-shopping-cart" />
                      <span> Add to Cart</span>
                    </button>
                  </div>
                  <div className="jtv-box-timer">
                    <div className="countbox_1 jtv-timer-grid" />
                  </div>
                  <div className="pr-info-area">
                    <div className="pr-button">
                      <div className="mt-button add_to_wishlist">
                        <a
                          href="#hghjjkkk"
                          title="Add to Wishlist"
                          data-placement="top"
                          data-container="body"
                          data-toggle="tooltip"
                        >
                          <i className="fa fa-heart" />
                        </a>
                        <input type="hidden" value="20" />
                      </div>
                      <div className="mt-button add_to_compare">
                        <a
                          href="#hghjjkkk"
                          title="Add to Comparelist"
                          data-placement="top"
                          data-container="body"
                          data-toggle="tooltip"
                        >
                          <i className="fa fa-signal" />
                        </a>
                        <input type="hidden" value="20" />
                      </div>
                      <div className="mt-button quick-view">
                        <a
                          href="/product/detail/20/Samsung-LED-TV"
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
                      <a
                        title="Samsung LED TV"
                        href="/product/detail/20/Samsung-LED-TV"
                      >
                        Samsung LED TV
                      </a>
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="rating-container">
                          {/* <input
                          type="text"
                          className="multe-rating-nocap-sm"
                          value=""
                          readOnly
                        /> */}
                          <StarRating owner="item-id" readOnly ratingV={5} />
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <p className="special-price">
                            <span className="price-label">Special Price</span>

                            <span className="price"> ₦75,650.00 </span>
                          </p>
                          <p className="old-price">
                            <span className="price-label">Regular Price:</span>

                            <span className="price"> ₦89,000.00 </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotDeal;
