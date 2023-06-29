import React from 'react';
import RolesGroup from './RolesGroup';

const MembersList = () => {
    return (
        <div className='bg-[#2d2f33] px-2 w-72 h-full overflow-y-auto pt-6'>
            <RolesGroup role={'developers'} amount={1} roleColor={'red'} />
            <RolesGroup role={'developers'} amount={1} roleColor={'red'} />
            <RolesGroup role={'community'} amount={1} roleColor={'#608bd6'} />

        </div>
    );
};

export default MembersList;