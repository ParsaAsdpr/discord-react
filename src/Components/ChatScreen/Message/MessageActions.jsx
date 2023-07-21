import React from 'react';

const MessageActions = ({AuthorID}) => {
    return (
        <div className='bg-[#2e3136] border border-[#27292e] absolute rounded-[3px] right-2 -top-1 flex justify-center items-center overflow-hidden'>
            <button className='text-2xl text-[#bbbbbb] leading-none hover:bg-white hover:bg-opacity-10 px-1.5 py-[3px]'>...</button>
        </div>
    );
};

export default MessageActions;