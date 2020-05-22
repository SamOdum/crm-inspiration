import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// import img1 from '../imgs/banner/115b979b42044c7.jpg';
import img1 from '../assets/banner/105b979eebe8e09.jpg';

export const HomeSliderContext = createContext();

const HomeSliderProvider = ({ children }) => {
  const [slider, setSlider] = useState([
    {
      sliderId: '01',
      dataTransition: 'slidehorizontal',
      dataSlotamount: '5',
      dataMasterspeed: '700',
      src: { img1 },
      alt: '15b9cf42cbe5cc.jpg',
      dataBgfit: 'cover',
      dataBgposition: 'center center',
      dataBgrepeat: 'no-repeat',
      layerOne: {
        className: 'tp-caption very_big_white skewfromrightshort fadeout',
        dataX: 'center',
        dataY: '100',
        dataSpeed: '500',
        dataStart: '1200',
        dataEasing: 'Circ.easeInOut',
        style: { fontSize: '70px', fontWeight: 800, color: '#000000' },
        spanText: 'Huge Sale',
      },
      layerTwo: {
        className:
          'tp-caption tp-caption medium_text skewfromrightshort fadeout',
        dataX: 'center',
        dataY: '165',
        dataHoffset: '0',
        dataVoffset: '-73',
        dataSpeed: '500',
        dataStart: '1200',
        dataEasing: 'Power4.easeOut',
        style: { fontSize: 20, fontWeight: 500, color: '#000000' },
        spanText: 'Sale off 75% all products',
      },
      layerThree: {
        className: 'tp-caption customin tp-resizeme rs-parallaxlevel-0',
        dataX: 'center',
        dataY: '210',
        dataHoffset: '0',
        dataVvoffset: '98',
        dataCustomin:
          'x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;',
        dataSpeed: '500',
        dataStart: '1500',
        dataEasing: 'Power3.easeInOut',
        dataSplitin: 'none',
        dataSplitout: 'none',
        dataElementdelay: '0.1',
        dataEndelementdelay: '0.1',
        dataLinktoslide: 'next',
        style: {
          zIndex: 12,
          maxWidth: 'auto',
          maxHeight: 'auto',
          whiteSpace: 'nowrap',
        },
        anchor: {
          className: 'largebtn solid',
          spanText: 'Learn More',
        },
        dataTransition: 'slidehorizontal',
        dataSlotamount: '5',
        dataMasterspeed: '700',
      },
    },
    {
      sliderId: '02',
      dataTransition: 'slidehorizontal',
      dataSlotamount: '5',
      dataMasterspeed: '700',
      src: { img1 },
      alt: '15b9cf42cbe5cc.jpg',
      dataBgfit: 'cover',
      dataBgposition: 'center center',
      dataBgrepeat: 'no-repeat',
      layerOne: {
        className: 'tp-caption very_big_white skewfromrightshort fadeout',
        dataX: 'center',
        dataY: '100',
        dataSpeed: '500',
        dataStart: '1200',
        dataEasing: 'Circ.easeInOut',
        style: { fontSize: '70px', fontWeight: 800, color: '#000000' },
        spanText: 'Huge Sale',
      },
      layerTwo: {
        className:
          'tp-caption tp-caption medium_text skewfromrightshort fadeout',
        dataX: 'center',
        dataY: '165',
        dataHoffset: '0',
        dataVoffset: '-73',
        dataSpeed: '500',
        dataStart: '1200',
        dataEasing: 'Power4.easeOut',
        style: { fontSize: 20, fontWeight: 500, color: '#000000' },
        spanText: 'Sale off 75% all products',
      },
      layerThree: {
        className: 'tp-caption customin tp-resizeme rs-parallaxlevel-0',
        dataX: 'center',
        dataY: '210',
        dataHoffset: '0',
        dataVvoffset: '98',
        dataCustomin:
          'x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;',
        dataSpeed: '500',
        dataStart: '1500',
        dataEasing: 'Power3.easeInOut',
        dataSplitin: 'none',
        dataSplitout: 'none',
        dataElementdelay: '0.1',
        dataEndelementdelay: '0.1',
        dataLinktoslide: 'next',
        style: {
          zIndex: 12,
          maxWidth: 'auto',
          maxHeight: 'auto',
          whiteSpace: 'nowrap',
        },
        anchor: {
          className: 'largebtn solid',
          spanText: 'Learn More',
        },
        dataTransition: 'slidehorizontal',
        dataSlotamount: '5',
        dataMasterspeed: '700',
      },
    },
  ]);

  return (
    <HomeSliderContext.Provider value={[slider, setSlider]}>
      {children}
    </HomeSliderContext.Provider>
  );
};

HomeSliderProvider.propTypes = {
  children: PropTypes.shape({ children: PropTypes.string }).isRequired,
};
export default HomeSliderProvider;
