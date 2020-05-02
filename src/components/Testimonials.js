import React from 'react';
import Clients from './Clients';

const Testimonials = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="testimonials">
            <div className="slider-items-products">
              <div
                id="testimonials-slider"
                className="product-flexslider hidden-buttons home-testimonials"
              >
                <div className="slider-items slider-width-col4 ">
                  <div className="holder">
                    <p>
                      CR-Mart is an excellent system and has helped us reach out
                      to millions of customer base across the world. We have
                      managed to hugely ramp up our revenue. Thanks to CR-Mart
                      team!
                    </p>
                    <div className="thumb">
                      <img
                        className="mylazy"
                        src="https://via.placeholder.com/90x90.png"
                        data-src="chooseOneImageLater"
                        alt="testimonials-img2.jpg"
                      />
                    </div>
                    <strong className="name">Ifeanyi Ihemeje</strong>

                    <strong className="designation">CEO, Focus Holdings</strong>
                  </div>
                  <div className="holder">
                    <p>
                      This is the best system that we have come across so far!
                      Keep up the good work! You really have helped us in a
                      great manner! Cheers!
                    </p>
                    <div className="thumb">
                      <img
                        className="mylazy"
                        src="https://via.placeholder.com/90x90.png"
                        data-src="chooseOneImageLater"
                        alt="testimonials-img4.jpg"
                      />
                    </div>
                    <strong className="name">Cyril Chukwu</strong>

                    <strong className="designation">
                      Director, Platini Concept
                    </strong>
                  </div>
                  <div className="holder">
                    <p>
                      We highly recommend CR-Mart system as its the most
                      flexible, versatile system that is on offering. It has all
                      required features to enable any business to move to a fast
                      running track and get running at a rapid pace!
                    </p>
                    <div className="thumb">
                      <img
                        className="mylazy"
                        src="https://via.placeholder.com/90x90.png"
                        data-src="chooseOneImageLater"
                        alt="testimonials-img1.jpg"
                      />
                    </div>
                    <strong className="name">Patrick Edet</strong>
                    <strong className="designation">
                      General Manager, Dojopa Limited
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Clients />
      </div>
    </div>
  );
};

export default Testimonials;
