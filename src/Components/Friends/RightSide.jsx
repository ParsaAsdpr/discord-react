import React from 'react';
import { Link } from 'react-router-dom';

const RightSide = ({icon, url}) => {
    return (
        <Link to={url} className='frs'>
            {icon}
        </Link>
    );
};

export default RightSide;