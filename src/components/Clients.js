import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import img1 from '../assets/clients/Bison.jpg';
import img2 from '../assets/clients/Cinemacafe.jpg';
import img3 from '../assets/clients/Rocket-Golf.jpg';
import img4 from '../assets/clients/Movers.jpg';
import img5 from '../assets/clients/Databerry.jpg';
import img6 from '../assets/clients/5b97df665af6b.png';
import img7 from '../assets/clients/5b97dfc713c18.png';
import img8 from '../assets/clients/Compass.jpg';
import img9 from '../assets/clients/Edge-Link.jpg';
import img10 from '../assets/clients/EDN.jpg';
import img11 from '../assets/clients/ei8hteen.jpg';
import img12 from '../assets/clients/FitTalks.jpg';
import img13 from '../assets/clients/Guitar-Studio.jpg';
import img14 from '../assets/clients/Iron-Duck-Clothing.jpg';
import img15 from '../assets/clients/Lion-Record-Label.jpg';
import img16 from '../assets/clients/PaperClip.jpg';

const clientData = [
  [
    {
      clientId: 1,
      clientName: 'Bison',
      clientLogoSrc: img1,
      clientLink: '###yuhhb',
    },
    {
      clientId: 2,
      clientName: 'Cinemacafe',
      clientLogoSrc: img2,
      clientLink: '###yuhhb',
    },
    {
      clientId: 3,
      clientName: 'Pocket Gulf',
      clientLogoSrc: img3,
      clientLink: '###yuhhb',
    },
  ],
  [
    {
      clientId: 4,
      clientName: 'Databerry',
      clientLogoSrc: img4,
      clientLink: '###yuhhb',
    },
    {
      clientId: 5,
      clientName: 'Movers',
      clientLogoSrc: img5,
      clientLink: '###yuhhb',
    },
    {
      clientId: 6,
      clientName: 'Fisherprice',
      clientLogoSrc: img6,
      clientLink: '###yuhhb',
    },
  ],
  [
    {
      clientId: 7,
      clientName: 'Samsung',
      clientLogoSrc: img7,
      clientLink: '###yuhhb',
    },
    {
      clientId: 8,
      clientName: 'Samsung',
      clientLogoSrc: img8,
      clientLink: '###yuhhb',
    },
    {
      clientId: 9,
      clientName: 'Samsung',
      clientLogoSrc: img9,
      clientLink: '###yuhhb',
    },
  ],
  [
    {
      clientId: 10,
      clientName: 'Samsung',
      clientLogoSrc: img10,
      clientLink: '###yuhhb',
    },
    {
      clientId: 11,
      clientName: 'Samsung',
      clientLogoSrc: img11,
      clientLink: '###yuhhb',
    },
    {
      clientId: 12,
      clientName: 'Samsung',
      clientLogoSrc: img12,
      clientLink: '###yuhhb',
    },
  ],
  [
    {
      clientId: 13,
      clientName: 'Samsung',
      clientLogoSrc: img13,
      clientLink: '###yuhhb',
    },
    {
      clientId: 14,
      clientName: 'Samsung',
      clientLogoSrc: img14,
      clientLink: '###yuhhb',
    },
    {
      clientId: 15,
      clientName: 'Samsung',
      clientLogoSrc: img15,
      clientLink: '###yuhhb',
    },
  ],
];

const Clients = () => {
  return (
    <div className="col-md-6">
      <div className="our-clients">
        <div className="slider-items-products">
          <div
            id="our-clients-slider"
            className="product-flexslider hidden-buttons"
          >
            <div className="slider-items slider-width-col6">
              {/* Item start */}
              <OwlCarousel
                items={2}
                className="owl-theme slider-items slider-width-col4"
                loop
                // nav
                margin={8}
                autoplay
              >
                {clientData.map((row, i) => {
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <div className="item" key={i}>
                      {row.map((client) => {
                        return (
                          <a href={client.clientLink} key={client.id}>
                            <img
                              src={client.clientLogoSrc}
                              alt={client.clientName}
                              className="brand-img mylazy"
                            />
                          </a>
                        );
                      })}
                    </div>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
