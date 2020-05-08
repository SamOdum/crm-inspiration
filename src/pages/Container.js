import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

// Container.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.array.isRequired),
// };
// Container.propTypes = {
//   // children: PropTypes.shape({ children: PropTypes.string }).isRequired,
//   children: PropTypes.arrayOf(PropTypes.array).isRequired,
// };

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Container;
