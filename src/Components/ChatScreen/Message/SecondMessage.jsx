import React from 'react';

const SecondMessage = ({message}) => {
    return (
        <div className='hover:bg-[#00000010] pl-[72px] text-slate-300 text-[15.5px]'>
            {message}
        </div>
    );
};

export default SecondMessage;