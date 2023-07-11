import React from "react";
import RolesGroup from "./RolesGroup";
import { getServer } from "../../Constants/ServersDataService";


const MembersList = ({serverID}) => {
  const roles = getServer(serverID).roles;

  return (
    <>
      <div className="bg-[#2d2f33] px-2 w-72 h-full relative overflow-y-auto overflow-x-visible pt-6">
        {roles.map((role => (
          <RolesGroup role={role} key={role._id} roles={roles} />
        )))}
      </div>
    </>
  );
};

export default MembersList;
