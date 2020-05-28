import React from 'react';

const SingleProduct = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ul>
                <li className="home">
                  <a title="Go to Home Page" href="index.html">
                    Home
                  </a>
                  <span>&raquo;</span>
                </li>
                <li className="">
                  <a title="Go to Home Page" href="shop_grid.html">
                    Living Rooms
                  </a>
                  <span>&raquo;</span>
                </li>
                <li>
                  <strong>Lorem Ipsum is simply</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumbs End -->  */}
      {/* <!-- Main Container --> */}
      <div className="main-container col1-layout">
        <div className="container">
          <div className="row">
            <div className="col-main">
              <div className="product-view-area">
                <div className="product-big-image col-xs-12 col-sm-5 col-lg-5 col-md-5">
                  <div className="icon-sale-label sale-left">Sale</div>
                  <div className="large-image">
                    <a
                      href="images/products/img03.jpg"
                      className="cloud-zoom"
                      id="zoom1"
                      rel="useWrapper: false, adjustY:0, adjustX:20"
                    >
                      <img
                        className="zoom-img"
                        src="images/products/img03.jpg"
                        alt="products"
                      />
                    </a>
                  </div>
                  <div className="flexslider flexslider-thumb">
                    <ul className="previews-list slides">
                      <li>
                        <a
                          href="images/products/img01.jpg"
                          className="cloud-zoom-gallery"
                          rel="useZoom: 'zoom1', smallImage: 'images/products/img01.jpg' "
                        >
                          <img
                            src="images/products/img01.jpg"
                            alt="Thumbnail 2"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/products/img07.jpg"
                          className="cloud-zoom-gallery"
                          rel="useZoom: 'zoom1', smallImage: 'images/products/img07.jpg' "
                        >
                          <img
                            src="images/products/img07.jpg"
                            alt="Thumbnail 1"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/products/img02.jpg"
                          className="cloud-zoom-gallery"
                          rel="useZoom: 'zoom1', smallImage: 'images/products/img02.jpg' "
                        >
                          <img
                            src="images/products/img02.jpg"
                            alt="Thumbnail 1"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/products/img03.jpg"
                          className="cloud-zoom-gallery"
                          rel="useZoom: 'zoom1', smallImage: 'images/products/img03.jpg' "
                        >
                          <img
                            src="images/products/img03.jpg"
                            alt="Thumbnail 2"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="images/products/img04.jpg"
                          className="cloud-zoom-gallery"
                          rel="useZoom: 'zoom1', smallImage: 'images/products/img04.jpg' "
                        >
                          <img
                            src="images/products/img04.jpg"
                            alt="Thumbnail 2"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- end: more-images -->  */}
                </div>
                <div className="col-xs-12 col-sm-7 col-lg-7 col-md-7 product-details-area">
                  <div className="product-name">
                    <h1>Lorem Ipsum is simply</h1>
                  </div>
                  <div className="price-box">
                    <p className="special-price">
                      <span className="price-label">Special Price</span>

                      <span className="price"> $329.99 </span>
                    </p>
                    <p className="old-price">
                      <span className="price-label">Regular Price:</span>

                      <span className="price"> $359.99 </span>
                    </p>
                  </div>
                  <div className="ratings">
                    <div className="rating">
                      <i className="fa fa-star" />

                      <i className="fa fa-star" />
                      <i className="fa fa-star" />

                      <i className="fa fa-star-o" />

                      <i className="fa fa-star-o" />
                    </div>
                    <p className="rating-links">
                      <a href="#">1 Review(s)</a>

                      <span className="separator">|</span>

                      <a href="#">Add Your Review</a>
                    </p>
                    <p className="availability in-stock pull-right">
                      Availability:
                      <span>In Stock</span>
                    </p>
                  </div>
                  <div className="short-description">
                    <h4>Quick Overview</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam fringilla augue nec est tristique auctor. Donec non
                      est at libero vulputate rutrum.
                    </p>
                    <p>
                      Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                      luctus malesuada tincidunt. Class aptent taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos
                      himenaeos. Integer enim purus, posuere at ultricies eu,
                      placerat a felis. Suspendisse aliquet urna pretium eros
                      convallis interdum. Quisque in arcu id dui vulputate
                      mollis eget non arcu. Aenean et nulla purus. Mauris vel
                      tellus non nunc mattis lobortis.
                    </p>
                  </div>
                  <div className="product-color-size-area">
                    <div className="color-area">
                      <h2 className="saider-bar-title">Color</h2>
                      <div className="color">
                        <ul>
                          <li>
                            <a href="#" />
                          </li>
                          <li>
                            <a href="#" />
                          </li>
                          <li>
                            <a href="#" />
                          </li>
                          <li>
                            <a href="#" />
                          </li>
                          <li>
                            <a href="#" />
                          </li>
                          <li>
                            <a href="#" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="size-area">
                      <h2 className="saider-bar-title">Size</h2>
                      <div className="size">
                        <ul>
                          <li>
                            <a href="#">S</a>
                          </li>
                          <li>
                            <a href="#">L</a>
                          </li>
                          <li>
                            <a href="#">M</a>
                          </li>
                          <li>
                            <a href="#">XL</a>
                          </li>
                          <li>
                            <a href="#">XXL</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="product-variation">
                    <form action="#" method="post">
                      <div className="cart-plus-minus">
                        <label htmlFor="qty">Quantity:</label>
                        <div className="numbers-row">
                          <div
                            onClick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 0 ) result.value--;return false;"
                            className="dec qtybutton"
                          >
                            <i className="fa fa-minus">&nbsp;</i>
                          </div>
                          <input
                            type="text"
                            className="qty"
                            title="Qty"
                            value="1"
                            maxLength="12"
                            id="qty"
                            name="qty"
                          />
                          <div
                            onClick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;"
                            className="inc qtybutton"
                          >
                            <i className="fa fa-plus">&nbsp;</i>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button pro-add-to-cart"
                        title="Add to Cart"
                        type="button"
                      >
                        <span>
                          <i className="fa fa-shopping-cart" />
                          Add to Cart
                        </span>
                      </button>
                    </form>
                  </div>
                  <div className="product-cart-option">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" />
                          <span>Add to Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-retweet" />
                          <span>Add to Compare</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-envelope" />
                          <span>Email to a Friend</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-overview-tab">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="product-tab-inner">
                      <ul
                        id="product-detail-tab"
                        className="nav nav-tabs product-tabs"
                      >
                        <li className="active">
                          <a href="#description" data-toggle="tab">
                            Description
                          </a>
                        </li>
                        <li>
                          <a href="#reviews" data-toggle="tab">
                            Reviews
                          </a>
                        </li>
                        <li>
                          <a href="#product_tags" data-toggle="tab">
                            Tags
                          </a>
                        </li>
                        <li>
                          <a href="#custom_tabs" data-toggle="tab">
                            Custom Tab
                          </a>
                        </li>
                      </ul>
                      <div id="productTabContent" className="tab-content">
                        <div
                          className="tab-pane fade in active"
                          id="description"
                        >
                          <div className="std">
                            <p>
                              Proin lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus. Sed et lorem nunc. Vestibulum
                              ante ipsum primis in faucibus orci luctus et
                              ultrices posuere cubilia Curae; Aenean eleifend
                              laoreet congue. Vivamus adipiscing nisl ut dolor
                              dignissim semper. Nulla luctus malesuada
                              tincidunt. Nunc facilisis sagittis ullamcorper.
                              Proin lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus. Sed et lorem nunc. Vestibulum
                              ante ipsum primis in faucibus orci luctus et
                              ultrices posuere cubilia Curae; Aenean eleifend
                              laoreet congue. Vivamus adipiscing nisl ut dolor
                              dignissim semper. Nulla luctus malesuada
                              tincidunt. Nunc facilisis sagittis ullamcorper.
                              Proin lectus ipsum, gravida et mattis vulputate,
                              tristique ut lectus. Sed et lorem nunc. Vestibulum
                              ante ipsum primis in faucibus orci luctus et
                              ultrices posuere cubilia Curae; Aenean eleifend
                              laoreet congue. Vivamus adipiscing nisl ut dolor
                              dignissim semper. Nulla luctus malesuada
                              tincidunt.
                            </p>
                            <p>
                              Nunc facilisis sagittis ullamcorper. Proin lectus
                              ipsum, gravida et mattis vulputate, tristique ut
                              lectus. Sed et lorem nunc. Vestibulum ante ipsum
                              primis in faucibus orci luctus et ultrices posuere
                              cubilia Curae; Aenean eleifend laoreet congue.
                              Vivamus adipiscing nisl ut dolor dignissim semper.
                              Nulla luctus malesuada tincidunt. Class aptent
                              taciti sociosqu ad litora torquent per conubia
                              nostra, per inceptos himenaeos. Integer enim
                              purus, posuere at ultricies eu, placerat a felis.
                              Suspendisse aliquet urna pretium eros convallis
                              interdum. Quisque in arcu id dui vulputate mollis
                              eget non arcu. Aenean et nulla purus. Mauris vel
                              tellus non nunc mattis lobortis.
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed tempor, lorem et placerat vestibulum,
                              metus nisi posuere nisl, in accumsan elit odio
                              quis mi. Cras neque metus, consequat et blandit
                              et, luctus a nunc. Etiam gravida vehicula tellus,
                              in imperdiet ligula euismod eget. Pellentesque
                              habitant morbi tristique senectus et netus et
                              malesuada fames ac turpis egestas.
                            </p>
                          </div>
                        </div>
                        <div id="reviews" className="tab-pane fade">
                          <div className="col-sm-5 col-lg-5 col-md-5">
                            <div className="reviews-content-left">
                              <h2>Customer Reviews</h2>
                              <div className="review-ratting">
                                <p>
                                  <a href="#">Amazing</a>
                                  Review by Company
                                </p>
                                <table>
                                  <tbody>
                                    <tr>
                                      <th>Price</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Value</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Quality</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="author">
                                  Angela Mack
                                  <small> (Posted on 16/12/2015)</small>
                                </p>
                              </div>
                              <div className="review-ratting">
                                <p>
                                  <a href="#">Good!!!!!</a>
                                  Review by Company
                                </p>
                                <table>
                                  <tbody>
                                    <tr>
                                      <th>Price</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Value</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Quality</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="author">
                                  Lifestyle
                                  <small> (Posted on 20/12/2015)</small>
                                </p>
                              </div>
                              <div className="review-ratting">
                                <p>
                                  <a href="#">Excellent</a>
                                  Review by Company
                                </p>
                                <table>
                                  <tbody>
                                    <tr>
                                      <th>Price</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Value</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th>Quality</th>
                                      <td>
                                        <div className="rating">
                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star" />

                                          <i className="fa fa-star-o" />

                                          <i className="fa fa-star-o" />
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p className="author">
                                  Jone Deo
                                  <small>(Posted on 25/12/2015)</small>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-7 col-lg-7 col-md-7">
                            <div className="reviews-content-right">
                              <h2>Write Your Own Review</h2>
                              <form>
                                <h3>
                                  You're reviewing:
                                  <span>Donec Ac Tempus</span>
                                </h3>
                                <h4>
                                  How do you rate this product?
                                  <em>*</em>
                                </h4>
                                <div className="table-responsive reviews-table">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <th />
                                        <th>1 star</th>
                                        <th>2 stars</th>
                                        <th>3 stars</th>
                                        <th>4 stars</th>
                                        <th>5 stars</th>
                                      </tr>
                                      <tr>
                                        <td>Quality</td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Price</td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Value</td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                        <td>
                                          <input type="radio" />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="form-area">
                                  <div className="form-element">
                                    <label>
                                      Nickname
                                      <em>*</em>
                                    </label>
                                    <input type="text" />
                                  </div>
                                  <div className="form-element">
                                    <label>
                                      Summary of Your Review
                                      <em>*</em>
                                    </label>
                                    <input type="text" />
                                  </div>
                                  <div className="form-element">
                                    <label>
                                      Review
                                      <em>*</em>
                                    </label>
                                    <textarea />
                                  </div>
                                  <div className="buttons-set">
                                    <button
                                      className="button submit"
                                      title="Submit Review"
                                      type="submit"
                                    >
                                      <span>
                                        <i className="fa fa-thumbs-up" />
                                        &nbsp;Review
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="product_tags">
                          <div className="box-collateral box-tags">
                            <div className="tags">
                              <form id="addTagForm" action="#" method="get">
                                <div className="form-add-tags">
                                  <div className="input-box">
                                    <label htmlFor="productTagName">
                                      Add Your Tags:
                                    </label>
                                    <input
                                      className="input-text"
                                      name="productTagName"
                                      id="productTagName"
                                      type="text"
                                    />
                                    <button
                                      type="button"
                                      title="Add Tags"
                                      className="button add-tags"
                                    >
                                      <i className="fa fa-plus" />
                                      &nbsp;
                                      <span>Add Tags</span>
                                    </button>
                                  </div>
                                  {/* <!--input-box-->  */}
                                </div>
                              </form>
                            </div>
                            {/* <!--tags--> */}
                            <p className="note">
                              Use spaces to separate tags. Use single quotes (')
                              for phrases.
                            </p>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="custom_tabs">
                          <div className="product-tabs-content-inner clearfix">
                            <p>
                              <strong>Lorem Ipsum</strong>
                              <span>
                                &nbsp;is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
