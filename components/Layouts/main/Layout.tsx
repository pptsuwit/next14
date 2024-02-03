import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="p-4 pt-20">{children}</div>
      <Drawer />
    </>
  );
};
export default MainLayout;
