import React from 'react';

const RightSide = ({icon, url}) => {
    return (
        <a href={url} className='frs'>
            {icon}
        </a>
    );
};

export default RightSide;