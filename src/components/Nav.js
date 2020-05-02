import React from 'react';

const Nav = () => {
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
                <div className="mega-menu-title">
                  <h3>Categories</h3>
                </div>
                <div className="mega-menu-category">
                  <ul className="nav">
                    <li>
                      <a href="product/listing/1.html">
                        <i className="icon fa fa-star fa-fw" />
                        Appliance Accessories, Tools & RTO
                      </a>
                      <div className="wrap-popup column1">
                        <div className="popup">
                          <div className="row">
                            <div className="col-md-12">
                              <h3>
                                <a href="product/listing/1/1.html">
                                  Adhesives & Sealants
                                </a>
                              </h3>
                              <ul className="nav">
                                <li>
                                  <a href="product/listing/1/1/1.html">
                                    Glues, Tapes & Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="product/listing/1/1/2.html">
                                    Pipe Sealants
                                  </a>
                                </li>
                              </ul>
                              <br />
                            </div>
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
                    <a href="home.html">
                      <div className="title title_font">
                        <span className="title-text">
                          <i className="icon fa fa-home" />
                          &nbsp;Home
                        </span>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="mt-root">
                  <div className="mt-root-item">
                    <div className="title title_font">
                      <span className="title-text">Best Seller</span>
                    </div>
                  </div>
                  <ul className="menu-items col-xs-12" />
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
