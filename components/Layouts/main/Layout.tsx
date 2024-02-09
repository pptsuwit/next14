import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="flex absolute z-0 pt-16 w-full">
        <Drawer />
        <div className="p-4 z-0 w-full">{children}</div>
      </div>
    </>
  );
};
export default MainLayout;
