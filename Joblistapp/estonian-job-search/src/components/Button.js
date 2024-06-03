import React from 'react';

const Button = ({ size, title, link, color }) => {
  return (
    <a href={link} className={`button button-${size} button-${color}`}>
      {title}
    </a>
  );
};

export default Button;
