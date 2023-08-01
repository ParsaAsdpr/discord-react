import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderRightSide = ({icon, url}) => {
    const navigate = useNavigate();
    return (
        <span onClick={() => navigate(url)} className='frs'>
            {icon}
        </span>
    );
};

export default HeaderRightSide;