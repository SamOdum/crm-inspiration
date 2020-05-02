import React from 'react';
import img1 from '../imgs/banner/115b979b42044c7.jpg';

const HomeSlide = (payload) => {
  const {
    dataTransition,
    dataSlotamount,
    dataMasterspeed,
    src,
    alt,
    dataBgfit,
    dataBgposition,
    dataBgrepeat,
    layerOne,
    layerTwo,
    layerThree,
  } = payload;

  return (
    <li
      data-transition="slidehorizontal"
      data-slotamount="5"
      data-masterspeed="700"
    >
      {/* <!-- MAIN IMAGE --> */}
      <img src={img1} alt="name" />
      {/* <!-- LAYERS --> */}
      {/* <!-- LAYER NR. 1 --> */}
      <div
        className="tp-caption very_big_white skewfromrightshort fadeout"
        data-x="center"
        data-y="100"
        data-speed="500"
        data-start="1200"
        data-easing="Circ.easeInOut"
        style={{ fontSize: 70, fontWeight: 800, color: '#000000' }}
      >
        <span>Huge Sale</span>
      </div>
      {/* <!-- LAYER NR. 2 --> */}
      <div
        className="tp-caption tp-caption medium_text skewfromrightshort fadeout"
        data-x="center"
        data-y="165"
        data-hoffset="0"
        data-voffset="-73"
        data-speed="500"
        data-start="1200"
        data-easing="Power4.easeOut"
        style={{ fontSize: 20, fontWeight: 500, color: '#000000' }}
      >
        Sale off 75% all products
      </div>
      {/* <!-- LAYER NR. 3 --> */}
      <div
        className="tp-caption customin tp-resizeme rs-parallaxlevel-0"
        data-x="center"
        data-y="210"
        data-hoffset="0"
        data-voffset="98"
        data-customin="x:0;y:0;z:0;rotationX:0;rotationY:0;rotationZ:0;scaleX:0;scaleY:0;skewX:0;skewY:0;opacity:0;transformPerspective:600;transformOrigin:50% 50%;"
        data-speed="500"
        data-start="1500"
        data-easing="Power3.easeInOut"
        data-splitin="none"
        data-splitout="none"
        data-elementdelay="0.1"
        data-endelementdelay="0.1"
        data-linktoslide="next"
        style={{
          zIndex: 12,
          maxWidth: 'auto',
          maxHeight: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        <a href="wsse" className="largebtn solid">
          Learn More
        </a>
      </div>
    </li>
  );
};

export default HomeSlide;
