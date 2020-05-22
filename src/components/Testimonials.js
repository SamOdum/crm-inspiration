import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/vertical.css';
import '../styles/modules/Testimonial.scss';
import Clients from './Clients';

const testimonyData = [
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
];

const Testimony = ({ data }) => {
  return (
    <div className="holder">
      <p>{data.comment}</p>
      <div className="thumb">
        <img
          className="mylazy"
          src={data.image}
          data-src="chooseOneImageLater"
          alt={data.name}
        />
      </div>
      <strong className="name">{data.name}</strong>
      <strong className="designation">{data.title}</strong>
    </div>
  );
};

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
                  <Slider
                    direction="vertical"
                    autoplay={8000}
                    classNames={{
                      slider: 'slider-v',
                      previousButton: 'prevButton',
                      nextButton: 'nexButton',
                      buttonDisabled: 'disabled',
                      track: 'track',
                      slide: 'slide-v',
                      hidden: 'hidden',
                      previous: 'previous',
                      current: 'current',
                      next: 'next',
                      animateIn: 'animateIn',
                      animateOut: 'animateOut',
                    }}
                  >
                    {testimonyData.map((testimonyDataItem) => (
                      <div key={testimonyDataItem.id}>
                        <Testimony data={testimonyDataItem} />
                      </div>
                    ))}
                  </Slider>
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
  data: PropTypes.shape({
    comment: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Testimonials;
