import React from 'react';

const Status = ({status, className }) => {
    let bg;
    switch(status) {
        case 'online':
          bg = 'bg-[#2ea153]';
          break;
        case 'dnd':
          bg = 'bg-[#E63E41]';
          break;
          case 'idle':
          bg = 'bg-[#DFA731]';
          break;
        default:
          bg = 'bg-[#111111]';
    }
    return (
        <div className={`${className} rounded-full w-[14px] h-[14px] absolute overflow-hidden translate-y-0.5 p-[2px] bg-[#2d2f33]`}>
            <div className={`w-full h-full ${bg} rounded-full overflow-hidden relative flex justify-center items-center`}>
                {status === 'dnd' && (
                    <div className='w-[8px] scale-x-90 scale-y-[0.60] h-[4px] bg-[#2d2f33] rounded-[1.5px]'></div>
                )}
                {status === 'idle' && (
                    <div className='w-5/6 h-5/6 rounded-full bottom-1 right-1 absolute bg-[#2d2f33]'></div>
                )}
            </div>
        </div>
    );
};


export default Status;