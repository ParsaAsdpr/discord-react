import React from 'react';

const MiniProfileSection = ({children, title}) => {
    return (
        <div className="mt-3">
        <h3 className="text-[11.5px] text-slate-200 font-bold">
          {title.toUpperCase()}
        </h3>
        
        <div>
            {children}
        </div>
      </div>
    );
};

export default MiniProfileSection;