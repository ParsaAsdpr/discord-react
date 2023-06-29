import React from 'react';
import {IoIosSearch} from 'react-icons/io'
const ChatSearch = () => {
    return (
        <div dir='rtl' className='flex items-center rounded-[3px] bg-[#202225] px-2'>
            <IoIosSearch className='text-slate-300 text-lg' />
            <input dir='ltr' className='text-[13px] bg-[#202225] w-28 py-0.5 outline-none text-slate-300 focus:w-52 duration-300' placeholder='Search' />
        </div>
    );
};

export default ChatSearch;