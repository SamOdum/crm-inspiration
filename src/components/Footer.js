import React from 'react';
import img2 from '../assets/logo/front_logo.png';

const Footer = () => {
  return (
    <>
      <br />
      <footer>
        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-7">
                <form
                  id="newsletter-validate-detail"
                  method="post"
                  action="http://localhost/multecartultimate/multefront/web/site/news-signup"
                >
                  <input
                    type="hidden"
                    name="_csrf"
                    value="V5IlP2pPuOEXMIPGtporLnThdPb5vDW9I0IRGuEMlRwfxxZyUxjbtlBp7oHMol1YP9VCuprOU_ETFXRAskrEKw=="
                  />
                  <h3 className="hidden-sm">Sign up for newsletter</h3>
                  <div className="newsletter-inner">
                    <input
                      className="newsletter-email"
                      name="newsemail"
                      placeholder="Enter Your Email"
                    />
                    <button
                      className="button subscribe"
                      type="submit"
                      title="Subscribe"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              <div className="social col-md-4 col-sm-5 social-icons">
                <ul className="inline-mode">
                  <li className="social-network fb">
                    <a
                      title="Join us on Facebook"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.facebook.com/"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="social-network googleplus">
                    <a
                      title="Join us on Google+"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://plus.google.com/"
                    >
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="social-network tw">
                    <a
                      title="Join us on Twitter"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.twitter.com/"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="social-network linkedin">
                    <a
                      title="Join us on LinkedIn"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.linkedin.com/"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li className="social-network youtube">
                    <a
                      title="Join us on YouTube"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.youtube.com/"
                    >
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li className="social-network instagram">
                    <a
                      title="Join us on Instagram"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.instagram.com/"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-xs-12 col-lg-3">
              <div className="footer-logo">
                <a href="home.html">
                  <img src={img2} alt="footer logo" className="img-footer" />
                </a>
              </div>
              <p>Feel free to reach out to us in case of any queries.</p>
              <div className="footer-content">
                <div className="email">
                  <i className="fa fa-envelope" />
                  <p>
                    <a href="mailto:contact@kaycraft.com">
                      contact@kaycraft.com
                    </a>
                  </p>
                </div>
                <div className="phone">
                  <i className="fa fa-phone" />
                  <p>08031234567</p>
                </div>
                <div className="address">
                  <i className="fa fa-map-marker" />
                  <p> Plot 8 Block 8, Fourth Street, State Housing, Calabar</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
              <div className="footer-links">
                <h3 className="links-title">
                  Information
                  <a className="expander visible-xs" href="#98778TabBlock-1">
                    +
                  </a>
                </h3>
                <div className="tabBlock" id="TabBlock-1">
                  <ul className="list-links list-unstyled">
                    <li>
                      <a href="site/delivery.html">Delivery Information</a>
                    </li>
                    <li>
                      <a href="site/returns.html">Returns</a>
                    </li>
                    <li>
                      <a href="site/privacy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="site/faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="site/tnc.html">Terms and Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-xs-12 col-lg-3 collapsed-block">
              <div className="footer-links">
                <h3 className="links-title">
                  Insider
                  <a className="expander visible-xs" href="#98778TabBlock-3">
                    +
                  </a>
                </h3>
                <div className="tabBlock" id="TabBlock-3">
                  <ul className="list-links list-unstyled">
                    <li>
                      <a href="site/about.html">About Us</a>
                    </li>
                    <li>
                      <a href="site/contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="login.html">My Orders</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2 col-xs-12 col-lg-3 collapsed-block">
              <div className="footer-links">
                <h3 className="links-title">
                  Service
                  <a className="expander visible-xs" href="#98778TabBlock-4">
                    +
                  </a>
                </h3>
                <div className="tabBlock" id="TabBlock-4">
                  <ul className="list-links list-unstyled">
                    <li>
                      <a href="login.html">Account</a>
                    </li>
                    <li>
                      <a href="login.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="order/default/cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="site/returns.html">Return Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-coppyright">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-xs-12 coppyright">
                CR-Mart 2020 | &copy;
                <a
                  href="http://www.kaycraft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KayCraft Solutions
                </a>
                &trade;
              </div>
              <div className="col-sm-6 col-xs-12">
                <div className="payment">
                  <ul>
                    <li>
                      <a href="#98778">
                        <img
                          title="Visa"
                          data-toggle="tooltip"
                          alt="Visa"
                          src="images/visa.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#98778">
                        <img
                          title="Paypal"
                          data-toggle="tooltip"
                          alt="Paypal"
                          src="images/paypal.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#98778">
                        <img
                          title="Master Card"
                          data-toggle="tooltip"
                          alt="Master Card"
                          src="images/master-card.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#98778">
                        <img
                          title="Razorpay"
                          data-toggle="tooltip"
                          alt="Razorpay"
                          src="images/razorpay.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#98778">
                        <img
                          title="BitPay"
                          data-toggle="tooltip"
                          alt="BitPay"
                          src="images/bitcoin.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#98778">
                        <img
                          title="Stripe"
                          data-toggle="tooltip"
                          alt="Stripe"
                          src="images/stripe.png"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <a href="#98774" className="totop totop-is-visible" /> */}
      <a href="#98774" className="totop totop-is-visible" />
    </>
  );
};

export default Footer;
