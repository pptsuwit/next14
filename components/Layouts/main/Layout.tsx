import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Drawer />
      <div className="p-4 pt-20 z-0">{children}</div>
    </>
  );
};
export default MainLayout;
