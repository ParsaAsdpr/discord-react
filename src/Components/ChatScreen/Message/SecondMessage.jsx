import React from 'react';
import MessageContent from './MessageContent';

const SecondMessage = ({message}) => {
    return (
        <div className='hover:bg-[#00000010] pl-[72px] text-slate-300 pb-[1px] text-[15.5px]'>
            <MessageContent message={message} />
        </div>
    );
};

export default SecondMessage;