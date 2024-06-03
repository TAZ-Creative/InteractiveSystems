import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ size, title, link, color }) => {
    return (
        <Link to={link} className={`button ${size} ${color}`}>
            {title}
        </Link>
    );
};

export default Button;
