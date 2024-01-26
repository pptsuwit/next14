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
      <main className="flex">
        <Drawer />
        {/* {drawer && <Drawer />} */}
        {children}
      </main>
    </>
  );
};
export default MainLayout;
