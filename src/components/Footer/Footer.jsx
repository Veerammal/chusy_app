import React from 'react';

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <footer style={{
      width: '100%',
      padding: '10px',
      height: '90px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
    }}>
      <p>
        All &copy; copy rights are reserved to Mangai Matching - (Smashers) {fullYear}
      </p>
    </footer>
  );
};

export default Footer;