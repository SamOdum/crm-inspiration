import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [clicked, setClicked] = useState(true);
  const handleClick = () => {
    setClicked((prevState) => ({ clicked: !prevState.clicked }));
  };
  const disp = clicked.clicked
    ? { display: 'inline-block' }
    : { display: 'none' };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <div className="mm-toggle-wrap">
              <div className="mm-toggle">
                <i className="fa fa-align-justify" />
              </div>
              <span className="mm-label">Categories</span>
            </div>
            <div className="mega-container visible-lg visible-md visible-sm">
              <div className="navleft-container">
                <div
                  className="mega-menu-title"
                  onClick={handleClick}
                  onKeyPress={handleClick}
                  role="button"
                  tabIndex="0"
                >
                  <h3>Categories</h3>
                </div>
                <div className="mega-menu-category" style={disp}>
                  <ul className="nav">
                    <li>
                      <a href="/product/listing/1">
                        <i className="icon fa fa-star fa-fw" /> Electronics
                      </a>
                      <div className="wrap-popup column2">
                        <div className="popup">
                          <div className="row">
                            <div className="col-sm-6">
                              <h3>
                                <a href="/product/listing/1/4">Cameras</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/1/4/9">
                                    DSLR Cameras
                                  </a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/1/2">
                                  Computers and Accessories
                                </a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/1/2/8">
                                    Headphones
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/1/2/5">Laptops</a>
                                </li>
                                <li>
                                  <a href="/product/listing/1/2/6">Mouse</a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep">
                              <h3>
                                <a href="/product/listing/1/1">
                                  Home Appliances
                                </a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/1/1/2">
                                    Microwaves
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/1/1/4">
                                    Refrigerators
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/1/1/1">
                                    Televisions
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/1/1/3">
                                    Washing Machines
                                  </a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/1/3">Mobile Phones</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/1/3/7">
                                    Smart Phones
                                  </a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="/product/listing/2">
                        <i className="icon fa fa-star fa-fw" /> Clothes
                      </a>
                      <div className="wrap-popup column2">
                        <div className="popup">
                          <div className="row">
                            <div className="col-sm-6">
                              <h3>
                                <a href="/product/listing/2/7">Kids</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/2/7/15">
                                    Boys Shirts
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/2/7/16">
                                    Girls Tops
                                  </a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/2/5">Men</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/2/5/11">Jeans</a>
                                </li>
                                <li>
                                  <a href="/product/listing/2/5/12">T-Shirts</a>
                                </li>
                                <li>
                                  <a href="/product/listing/2/5/10">Trousers</a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep">
                              <h3>
                                <a href="/product/listing/2/6">Women</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/2/6/14">Jeans</a>
                                </li>
                                <li>
                                  <a href="/product/listing/2/6/13">Trousers</a>
                                </li>
                              </ul>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      {' '}
                      <a href="/product/listing/3">
                        <i className="icon fa fa-star fa-fw" /> Beauty
                      </a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-12">
                              <h3>
                                <a href="/product/listing/3/9">Cosmetics</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/3/9/19">
                                    Lipsticks
                                  </a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/3/8">Fragrances</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/3/8/17">Men</a>
                                </li>
                                <li>
                                  <a href="/product/listing/3/8/18">Women</a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      {' '}
                      <a href="/product/listing/4">
                        <i className="icon fa fa-star fa-fw" /> Books and
                        Literature
                      </a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-12">
                              <h3>
                                <a href="/product/listing/4/10">Academic</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/4/10/20">
                                    Story Books
                                  </a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/4/11">Non-Academic</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/4/11/21">
                                    Coloring Books
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/4/11/22">Novels</a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      {' '}
                      <a href="/product/listing/5">
                        <i className="icon fa fa-star fa-fw" /> Digital Products
                      </a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-12">
                              <h3>
                                <a href="/product/listing/5/12">
                                  Computer Software
                                </a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/5/12/23">
                                    Antivirus
                                  </a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/5/13">
                                  Serials and Codes
                                </a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/5/13/24">
                                    Serial Numbers
                                  </a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep" />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      {' '}
                      <a href="/product/listing/6">
                        <i className="icon fa fa-star fa-fw" /> Toys and Baby
                        Products
                      </a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-12">
                              <h3>
                                <a href="/product/listing/6/15">
                                  Baby Products
                                </a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/6/15/27">Diapers</a>
                                </li>
                              </ul>
                              <br />
                              <h3>
                                <a href="/product/listing/6/14">Toys</a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="/product/listing/6/14/25">
                                    Board Games
                                  </a>
                                </li>
                                <li>
                                  <a href="/product/listing/6/14/26">
                                    Infants and Toddlers
                                  </a>
                                </li>
                              </ul>
                              <br />
                            </div>
                            <div className="col-md-4 col-sm-6 has-sep" />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 col-sm-8">
            <div className="mtmegamenu">
              <ul>
                <li className="mt-root demo_custom_link_cms">
                  <div className="mt-root-item">
                    <NavLink to="/">
                      <div className="title title_font">
                        <span className="title-text">
                          <i className="icon fa fa-home" />
                          &nbsp;Home
                        </span>
                      </div>
                    </NavLink>
                  </div>
                </li>
                <li className="mt-root">
                  <div className="mt-root-item">
                    <div className="title title_font">
                      <span className="title-text">Best Seller</span>
                    </div>
                  </div>
                  <ul className="menu-items col-xs-12">
                    <li className="menu-item depth-1 product menucol-1-3 withimage">
                      <div className="product-item">
                        <div className="item-inner">
                          <div className="product-thumbnail">
                            <div className="pr-img-area">
                              <a
                                title="Windows 10 Serial Code"
                                href="/product/detail/24/Windows-10-Serial-Code"
                              >
                                <figure className="">
                                  <img
                                    className="first-img mainlazy"
                                    src="/loading.gif"
                                    data-src="https://system.multecart.com/attachments/43_small.jpg"
                                    alt="Windows 10 Serial Code"
                                  />
{' '}
                                  <img
                                    className="hover-img mainlazy"
                                    src="/loading.gif"
                                    data-src="https://system.multecart.com/attachments/43_small.jpg"
                                    alt="Windows 10 Serial Code"
                                  />
                                </figure>
                              </a>
                              <button
                                type="button"
                                className="add-to-cart-mt addtocart"
                                value="24"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart" />
                                <span> Add to Cart</span>
{' '}
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
                                    {' '}
                                    <i className="fa fa-heart" />
{' '}
                                  </a>
                                  <input type="hidden" value="24" />
                                </div>
                                <div className="mt-button add_to_compare">
                                  <a
                                    href="#jsdheoo"
                                    title="Add to Comparelist"
                                    data-placement="top"
                                    data-container="body"
                                    data-toggle="tooltip"
                                  >
                                    {' '}
                                    <i className="fa fa-signal" />
{' '}
                                  </a>
                                  <input type="hidden" value="24" />
                                </div>
                                <div className="mt-button quick-view">
                                  <a
                                    href="/product/detail/24/Windows-10-Serial-Code"
                                    title="View Item"
                                    data-placement="top"
                                    data-container="body"
                                    data-toggle="tooltip"
                                  >
                                    {' '}
                                    <i className="fa fa-search" />
{' '}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item-info">
                            <div className="info-inner">
                              <div className="item-title">
                                <a
                                  title="Windows 10 Serial Code"
                                  href="/product/detail/24/Windows-10-Serial-Code"
                                >
                                  Windows 10 Serial Code
{' '}
                                </a>
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  <input
                                    type="text"
                                    className="multe-rating-nocap-sm"
                                    value=""
                                    readOnly
                                  />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    <span className="regular-price">
                                      {' '}
                                      <span className="price">
                                        ₦100.00
                                      </span>
{' '}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item depth-1 product menucol-1-3 withimage">
                      <div className="product-item">
                        <div className="item-inner">
                          <div className="product-thumbnail">
                            <div className="pr-img-area">
                              <a
                                title="Backpacks"
                                href="/product/detail/4879/Backpacks"
                              >
                                <figure className="">
                                  {' '}
                                  <img
                                    className="first-img mainlazy"
                                    src="/loading.gif"
                                    data-src="https://system.multecart.com/attachments/4890_small.jpeg"
                                    alt="Backpacks"
                                  />
{' '}
                                  <img
                                    className="hover-img mainlazy"
                                    src="/loading.gif"
                                    data-src="https://system.multecart.com/attachments/4890_small.jpeg"
                                    alt="Backpacks"
                                  />
                                </figure>
                              </a>
                              <button
                                type="button"
                                className="add-to-cart-mt addtocart"
                                value="4879"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart" />
                                <span> Add to Cart</span>
{' '}
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
                                  <input type="hidden" value="4879" />
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
                                  <input type="hidden" value="4879" />
                                </div>
                                <div className="mt-button quick-view">
                                  <a
                                    href="/product/detail/4879/Backpacks"
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
                                  title="Backpacks"
                                  href="/product/detail/4879/Backpacks"
                                >
                                  Backpacks
{' '}
                                </a>
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  <input
                                    type="text"
                                    className="multe-rating-nocap-sm"
                                    value=""
                                    readOnly
                                  />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    <span className="regular-price">
                                      {' '}
                                      <span className="price">₦35.98</span>
{' '}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item depth-1 product menucol-1-3 withimage">
                      <div className="product-item">
                        <div className="item-inner">
                          <div className="product-thumbnail">
                            <div className="pr-img-area">
                              <a title="Bags" href="/product/detail/4878/Bags">
                                <figure className="">
                                  {' '}
                                  <img
                                    className="first-img mainlazy"
                                    src="/loading.gif"
                                    data-src="https://system.multecart.com/attachments/4889_small.jpeg"
                                    alt="Bags"
                                  />
{' '}
                                  <img
                                    className="hover-img mainlazy"
                                    src="/loading.gif"
                                    data-src="https://system.multecart.com/attachments/4889_small.jpeg"
                                    alt="Bags"
                                  />
                                </figure>
                              </a>
                              <button
                                type="button"
                                className="add-to-cart-mt addtocart"
                                value="4878"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart" />
                                <span> Add to Cart</span>
{' '}
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
                                  <input type="hidden" value="4878" />
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
                                  <input type="hidden" value="4878" />
                                </div>
                                <div className="mt-button quick-view">
                                  <a
                                    href="/product/detail/4878/Bags"
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
                                  title="Bags"
                                  href="/product/detail/4878/Bags"
                                >
                                  Bags
{' '}
                                </a>
                              </div>
                              <div className="item-content">
                                <div className="rating">
                                  <input
                                    type="text"
                                    className="multe-rating-nocap-sm"
                                    value=""
                                    readOnly
                                  />
                                </div>
                                <div className="item-price">
                                  <div className="price-box">
                                    <span className="regular-price">
                                      {' '}
                                      <span className="price">₦95.64</span>
{' '}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
