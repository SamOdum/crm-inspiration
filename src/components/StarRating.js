import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import '../styles/modules/Star.scss';

/**
 * Renders a <StarRating /> component
 * @param  {object} props
 * @param  {string|number} props.owner - Id of unit calling component
 * @param  {boolean} [props.readOnly] - Controls client-side setting
 * @param  {number} [props.ratingV] - Server-returned rating value
 */
const StarRating = ({ owner, readOnly, ratingV }) => {
  const initialState = ratingV;
  const [rating, setRating] = useState(initialState);
  const [hover, setHover] = useState(null);
  const stars = [1, 2, 3, 4, 5]; // <= number of rating stars desired

  return (
    <div className="rating-bounds">
      {stars.map((star, i) => {
        const ratingValue = i + 1;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <label key={i} owner={owner} htmlFor="rating">
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              className="star"
              style={
                readOnly
                  ? { cursor: 'default' }
                  : { cursor: 'pointer', transition: 'color 200ms' }
              }
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={20}
              onClick={readOnly ? null : () => setRating(ratingValue)}
              onMouseEnter={readOnly ? null : () => setHover(ratingValue)}
              onMouseLeave={readOnly ? null : () => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

StarRating.defaultProps = {
  readOnly: '',
  ratingV: 0,
};

StarRating.propTypes = {
  owner: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  readOnly: PropTypes.string,
  ratingV: PropTypes.number,
};

export default StarRating;
