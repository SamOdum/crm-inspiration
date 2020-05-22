import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/front_logo.png';

const HeaderStrip = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-4 hidden-xs">
                <div className="welcome-msg ">
                  Welcome to Cross River Market
                </div>
                <span className="phone hidden-sm">
                  <i className="fa fa-phone-square">: 08031234567</i>
                </span>
              </div>

              {/* top links */}
              <div className="headerlinkmenu col-lg-8 col-md-7 col-sm-8 col-xs-12">
                <div className="links">
                  {/* <div className="myaccount"><a title="My Account" href="account_page.html"><i className="fa fa-user"></i><span className="hidden-xs">My Account</span></a></div>
                
  <div className="blog"><a title="Blog" href="blog.html"><i className="fa fa-rss"></i><span className="hidden-xs">Blog</span></a></div> */}

                  <div className="block block-currency">
                    <div className="item-cur">
                      <NavLink to="/login">
                        <i className="fa fa-unlock-alt" />
                        <span className="hidden-xs">Login</span>
                      </NavLink>
                    </div>
                  </div>
                  <div className="wishlist">
                    <NavLink title="My Wishlist" to="/login">
                      <i className="fa fa-heart" />
                      <span className="hidden-xs">Wishlist</span>
                      <span className="label label-primary pull-right mywishlistcount">
                        0
                      </span>
                    </NavLink>
                  </div>
                  <div className="compare">
                    <a title="My Compare List" href="site/compare.html">
                      <i className="fa fa-signal" />
                      <span className="hidden-xs hidden-sm hidden-md">
                        Comparison
                      </span>
                      <span className="label label-primary pull-right mycomparelistcount">
                        0
                      </span>
                    </a>
                  </div>
                </div>
                <div className="language-currency-wrapper">
                  <div className="inner-cl">
                    <div className="block block-language form-language">
                      <div className="lg-cur">
                        <span>
                          &nbsp;
                          <i className="fa fa-flag" />
                          &nbsp;
                          <span className="lg-fr">Language</span>
                          <i className="fa fa-angle-down" />
                        </span>
                      </div>
                      <ul>
                        <li>
                          <a href="home.html?language=fr-FR">
                            <span>French</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=fy-FY">
                            <span>Frisian</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=gl-GL">
                            <span>Galician</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=ka-KA">
                            <span>Georgian</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=de-DE">
                            <span>German</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=el-EL">
                            <span>Greek</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=gu-GU">
                            <span>Gujarati</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=ht-HT">
                            <span>Haitian Creole</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=ha-HA">
                            <span>Hausa</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=haw-HAW">
                            <span>Hawaiian</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=iw-IW">
                            <span>Hebrew</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=hi-HI">
                            <span>Hindi</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=hu-HU">
                            <span>Hungarian</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=is-IS">
                            <span>Icelandic</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=ig-IG">
                            <span>Igbo</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=id-ID">
                            <span>Indonesian</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=ga-GA">
                            <span>Irish</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=it-IT">
                            <span>Italian</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=ja-JA">
                            <span>Japanese</span>
                          </a>
                        </li>
                        <li>
                          <a href="home.html?language=zu-ZU">
                            <span>Zulu</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="block block-currency">
                      <div className="item-cur">
                        <span>NGN (₦)</span>
                        <i className="fa fa-angle-down" />
                      </div>
                      <ul>
                        <li>
                          <a href="#2222222">
                            <span className="cur_icon">€</span>
                            EUR
                          </a>
                        </li>
                        <li>
                          <a href="#22222">
                            <span className="cur_icon">¥</span>
                            JPY
                          </a>
                        </li>
                        <li>
                          <a className="selected" href="#222222">
                            <span className="cur_icon">$</span>
                            USD
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="block block-currency">
                      <div className="item-cur">
                        <span>Register </span>
                        <i className="fa fa-angle-down" />
                      </div>
                      <ul>
                        <li>
                          <NavLink to="/signup">
                            <span>
                              <i className="fa fa-user" />
                            </span>
                            As User
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/vendor-signup">
                            <span>
                              <i className="fa fa-male" />
                            </span>
                            As Vendor
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Default Welcome Message */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-xs-12">
              {/* Header Logo */}
              <div className="logo">
                <a title="Cross River Market" href="home.html">
                  <img
                    alt="responsive theme logo"
                    src={logo}
                    className="img-logo"
                  />
                </a>
              </div>
              {/* End Header Logo */}
            </div>
            <div className="col-xs-9 col-sm-6 col-md-6">
              {/* Search */}

              <div className="top-search">
                <div id="search">
                  <form>
                    <div className="input-group">
                      <input
                        type="hidden"
                        name="_csrf"
                        value="V5IlP2pPuOEXMIPGtporLnThdPb5vDW9I0IRGuEMlRwfxxZyUxjbtlBp7oHMol1YP9VCuprOU_ETFXRAskrEKw=="
                      />
                      <input
                        id="filter_name"
                        type="text"
                        name="searchbox"
                        placeholder="Search"
                        className="form-control"
                      />
                      <button type="submit" className="btn-search">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* End Search */}
            </div>
            {/* top cart */}
            <div className="col-lg-3 col-xs-3 top-cart">
              <div className="top-cart-contain">
                <div className="mini-cart">
                  <div
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    className="basket dropdown-toggle"
                  >
                    <a href="#xxxxxx">
                      <div className="cart-icon">
                        <i className="fa fa-shopping-cart mycart" />
                      </div>
                      <div className="shoppingcart-inner hidden-xs">
                        <span className="cart-title">Shopping Cart</span>
                        <span className="cart-total cartcount">0 Item(s)</span>
                      </div>
                    </a>
                  </div>
                  <div>
                    <div className="top-cart-content">
                      <div className="block-subtitle hidden-xs cartdiv">
                        Recently added item(s)
                      </div>
                      <ul id="cart-sidebar" className="mini-products-list">
                        <input
                          type="hidden"
                          className="hiddencartvalue"
                          value=""
                        />
                        <input
                          type="hidden"
                          className="hiddenremainingstock"
                          value=""
                        />
                      </ul>
                      {/* <div className="top-subtotal">Subtotal: <span className="price">$520.00</span></div> */}
                      <div className="actions">
                        <a
                          href="order/default/cart.html"
                          className="btn btn-primary view-cart"
                        >
                          <i className="fa fa-shopping-cart" />
                          View Cart
                        </a>
                        <a
                          href="home.html"
                          className="btn btn-danger btn-checkout"
                        >
                          <i className="fa fa-share" />
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderStrip;
