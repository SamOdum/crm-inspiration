import React from 'react';
import PropTypes from 'prop-types';

const SingleService = ({ data }) => {
  return (
    <div className="jtv-single-service">
      <div className="service-icon">
        <img alt={data.name} src={data.imageSrc} />
      </div>
      <div className="service-text">
        <h2>{data.name}</h2>
        <p>
          <span>{data.callToAction}</span>
        </p>
      </div>
    </div>
  );
};

SingleService.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    imageSrc: PropTypes.string,
    callToAction: PropTypes.string,
  }).isRequired,
};

export default SingleService;
