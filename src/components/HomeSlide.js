import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../styles/modules/Slide.scss';

const HomeSlide = () => {
  // const center1 = {
  //   textAlign: 'center',
  //   position: 'absolute',
  //   top: `${50}%`,
  //   left: `${50}%`,
  //   transform: `translate(-50%, -50%)`,
  // };
  const content = [
    {
      id: 1,
      title: 'Vulputate Mollis Ultricies Fermentum Parturient',
      description:
        'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
      button: 'Read More',
      image: 'https://i.imgur.com/ZXBtVw7.jpg',
      user: 'Luan Gjokaj',
      userProfile: 'https://i.imgur.com/JSW6mEk.png',
    },
    {
      id: 2,
      title: 'Tortor Dapibus Commodo Aenean Quam',
      description:
        'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
      button: 'Discover',
      image: 'https://i.imgur.com/DCdBXcq.jpg',
      user: 'Erich Behrens',
      userProfile: 'https://i.imgur.com/0Clfnu7.png',
    },
    {
      id: 3,
      title: 'Phasellus volutpat metus',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
      button: 'Buy now',
      image: 'https://i.imgur.com/DvmN8Hx.jpg',
      user: 'Bruno Vizovskyy',
      userProfile: 'https://i.imgur.com/4KeKvtH.png',
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
        {content.map((oneItem) => {
          return (
            <div
              key={oneItem.id}
              style={{
                background: `url('${oneItem.image}') no-repeat center center`,
              }}
            >
              <div className="slideCenter">
                <h1 className="Slide-h1">{oneItem.title}</h1>
                <p>{oneItem.description}</p>
                <button type="button" className="slide-button">
                  {oneItem.button}
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
