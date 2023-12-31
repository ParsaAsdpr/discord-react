import React from "react";
import RolesGroup from "./RolesGroup";


const MembersList = ({roles}) => {

  console.log(roles);

  return (
      <div className="bg-[#2B2D31] px-2 w-72 h-full relative overflow-y-auto overflow-x-visible pt-6">
        {roles.map((role => (
          <RolesGroup role={role} key={role._id} roles={roles} />
        )))}
      </div>
  );
};

export default MembersList;
