import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {UserData} from "../Constants/UserDataService";
import UserContext from "../Context/UserContext";

export default function Layout({ title, children }) {
  // let titleText = `• Discord | ${title}`
  return (
    <UserContext.Provider value={UserData}>
      <div className="flex min-h-screen flex-row w-full">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </UserContext.Provider>
  );
}
