import React from 'react';

const Tag = ({children}) => {
    return (
        <span className='py-[0.5px] px-[1px] tag-bg'>
            ${children}
        </span>
    );
};

export default Tag;