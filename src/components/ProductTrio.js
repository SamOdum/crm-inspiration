import React from 'react';
import PropTypes from 'prop-types';

const ProductTrio = ({ data }) => {
  return (
    <div className="jtv-product jtv-cat-margin">
      <div className="product-img">
        <a href="/product/detail/24/Windows-10-Serial-Code">
          <img
            className="primary-img mylazy"
            src={data.priImageSrc}
            data-src={data.priImageSrc}
            alt={data.name}
          />

          <img
            className="secondary-img mylazy"
            src={data.secImageSrc}
            data-src={data.secImageSrc}
            alt={data.name}
          />
        </a>
      </div>
      <div className="jtv-product-content">
        <h3>
          <a href={data.link}>{data.name}</a>
        </h3>
        <div className="price-box">
          {data.specialPrice ? (
            <>
              <p className="special-price">
                <span className="price-label">Special Price</span>
                <span className="price">{`₦${data.specialPrice}  `}</span>
              </p>
              <p className="old-price">
                <span className="price-label">Regular Price:</span>
                <span className="price">{`₦${data.regularPrice}`}</span>
              </p>
            </>
          ) : (
            <p className="regular-price">
              <span className="price">{`₦${data.regularPrice}`}</span>
            </p>
          )}
        </div>
        <div className="jtv-product-action">
          <div className="jtv-extra-link">
            <div className="button-cart">
              <button
                className="addtocartmini"
                type="button"
                value="24"
                title="Add to Cart"
                data-placement="top"
                data-container="body"
                data-toggle="tooltip"
              >
                <i className="fa fa-shopping-cart" />
              </button>
            </div>
            <a
              className="add_to_compare"
              href="#jjkchc"
              title="Add to Comparelist"
              data-placement="top"
              data-container="body"
              data-toggle="tooltip"
            >
              <i className="fa fa-signal" />
              <input type="hidden" value="24" />
            </a>

            <a
              className="add_to_wishlist"
              href="#jjkchc"
              title="Add to Wishlist"
              data-placement="top"
              data-container="body"
              data-toggle="tooltip"
            >
              <i className="fa fa-heart" />
              <input type="hidden" value="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductTrio.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    priImageSrc: PropTypes.string,
    secImageSrc: PropTypes.string,
    regularPrice: PropTypes.number,
    specialPrice: PropTypes.number,
  }).isRequired,
};

export default ProductTrio;
