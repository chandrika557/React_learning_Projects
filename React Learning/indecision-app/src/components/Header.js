import React from 'react';

// create the file , copy the copy, setup import/export
const Header = ({ title = 'Indecision', subtitle }) => {
    return (
      <div>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
      </div>
    );
};
Header.defaultProps = {
  title: 'Indecision'
};

export default Header;

//