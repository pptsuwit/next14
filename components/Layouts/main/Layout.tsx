// "use client";
import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import { useGlobalContext } from "@/contexts/store";
const MainLayout = ({ children }: PropsWithChildren) => {
  // const { drawer } = useGlobalContext();
  return (
    <>
      <Navbar />
      <Drawer />
      <div className="p-4 pt-20">{children}</div>
    </>
  );
};
export default MainLayout;
