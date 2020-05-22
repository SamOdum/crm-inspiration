import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/modules/Slide.scss';
import img1 from '../assets/banner/accessories.jpg';
import img2 from '../assets/banner/camera.jpg';
import img3 from '../assets/banner/grocceries.jpg';
import img4 from '../assets/banner/phones.jpg';
import img5 from '../assets/banner/wristwatch.jpg';

const HomeSlide = () => {
  const heroContentData = [
    {
      id: 1,
      title: 'Original Accessories',
      description: 'Quality accessories from original equipment manufacturers',
      button: 'Buy Now',
      image: img1,
      link: '/shop/121',
    },
    {
      id: 2,
      title: 'HD Cameras',
      description: 'Get razor-sharp images with our wide range of HD cameras',
      button: 'Discover',
      image: img2,
      link: '/shop/122',
    },
    {
      id: 3,
      title: 'Grocceries Weekend!',
      description:
        "There's no reason your weekend shouldn't be lit. Let's make your shopping fun!",
      button: 'Learn More',
      image: img3,
      link: '/shop/123',
    },
    {
      id: 3,
      title: 'Sleek Phones',
      description:
        "Whether you're splurging or on a budget, there's a Smartphone just for you.",
      button: 'See Options',
      image: img4,
      link: '/shop/124',
    },
    {
      id: 3,
      title: 'Be The Boss...',
      description:
        'You worked for it. Treat yourself to elegance. Show the world your taste.',
      button: 'Shop Now',
      image: img5,
      link: '/shop/125',
    },
  ];

  return (
    <div className="slider-container">
      <Slider
        autoplay={3000}
        classNames={{
          slider: 'slider slider-moded',
          previousButton: 'previousButton',
          nextButton: 'nextButton',
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
        {heroContentData.map((heroContentDataItem) => {
          return (
            <div
              key={heroContentDataItem.id}
              style={{
                background: `url('${heroContentDataItem.image}') no-repeat center center`,
              }}
            >
              <div className="slideCenter">
                <h1 className="Slide-h1">{heroContentDataItem.title}</h1>
                <h4>{heroContentDataItem.description}</h4>
                <button type="button" className="slide-button">
                  <a href={heroContentDataItem.link}>
                    {heroContentDataItem.button}
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSlide;
