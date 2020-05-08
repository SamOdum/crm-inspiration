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
