import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/vertical.css';
import Clients from './Clients';

const Testimony = ({ testimonyData }) => {
  return (
    <>
      <p>{testimonyData.comment}</p>
      <div className="thumb">
        <img
          className="mylazy"
          src={testimonyData.image}
          testimonyData-src="chooseOneImageLater"
          alt={testimonyData.name}
        />
      </div>
      <strong className="name">{testimonyData.name}</strong>
      <strong className="designation">{testimonyData.title}</strong>
    </>
  );
};

const Testimonials = () => {
  const [testimonial] = useState([
    {
      id: 1,
      comment:
        'CR-Mart is an excellent system and has helped us reach out to millions of customer base across the world. We have managed to hugely ramp up our revenue. Thanks to CR-Mart team!',
      image: 'https://via.placeholder.com/90x90.png',
      name: 'Ifeanyi Ihemeje',
      title: 'Ceo, Focus Tianshi Global',
    },
    {
      id: 2,
      comment:
        'This is the best system that we have come across so far! Keep up the good work! You really have helped us in a great manner! Cheers!',
      image: 'https://via.placeholder.com/90x90.png',
      name: 'Cyril Chukwu',
      title: 'Director, Platini Concept',
    },
    {
      id: 1,
      comment:
        'We highly recommend CR-Mart system as its the most flexible, versatile system that is on offering. It has all required features to enable any business to move to a fast running track and get running at a rapid pace!',
      image: 'https://via.placeholder.com/90x90.png',
      name: 'Patrick Edet',
      title: 'General Manager, Dojopa Limited',
    },
  ]);
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
                    <Slider
                      direction="vertical"
                      autoplay={8000}
                      classNames={{
                        slider: 'slider',
                        previousButton: 'prevButton',
                        nextButton: 'nexButton',
                        buttonDisabled: 'disabled',
                        track: 'track',
                        slide: 'slide',
                        hidden: 'hidden',
                        previous: 'previous',
                        current: 'current',
                        next: 'next',
                        animateIn: 'animateIn',
                        animateOut: 'animateOut',
                      }}
                    >
                      {testimonial.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <div>
                            <Testimony testimonyData={item} />
                          </div>
                        </div>
                      ))}
                    </Slider>
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

Testimony.propTypes = {
  testimonyData: PropTypes.shape({
    comment: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Testimonials;
