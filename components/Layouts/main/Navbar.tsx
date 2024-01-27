"use client";
import { useGlobalContext } from "@/contexts/store";
import { AiOutlineMenu, AiOutlinePicture } from "react-icons/ai";
import defaultImage from "@/assets/avatar.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { deleteCookie } from "cookies-next";
const Navbar = () => {
  const { drawer, setDrawer } = useGlobalContext();
  const [profileImage, setProfileImage] = useState(defaultImage.src);
  const [menu, setMenu] = useState(false);
  const name = "t3t";
  const email = "github.com/pptsuwit";

  const ref = useRef<any>(null);
  function handleClickOutside(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target)) {
      setMenu(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    // return () => {
    //   // Unbind the event listener on clean up
    //   document.removeEventListener("mousedown", handleClickOutside);
    // };
  }, []);

  const menuList = [
    { name: "Home", link: "/" },
    { name: "Profile", link: "https://github.com/pptsuwit" },
    {
      name: "Repository",
      link: "https://github.com/pptsuwit?tab=repositories",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
  ];
  const liMenuList = menuList.map((item, index) => {
    return (
      <li key={index}>
        <Link
          onClick={() => setMenu(false)}
          href={item.link}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          {item.name}
        </Link>
      </li>
    );
  });

  function signOut() {
    localStorage.removeItem(process.env.TOKEN_NAME as string);
    deleteCookie(process.env.TOKEN_NAME as string);
    window.location.reload();
  }
  useEffect(() => {
    // setProfileImage("https://picsum.photos/200/300.jpg");
    // setProfileImage("https://picsum.photos/id/237/200/300.jpg");
  }, []);

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md">
        {/* <div className="w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 "> */}
        <div className="w-screen-xl flex items-center  py-2 ">
          <div className="flex xs:w-16 sm:w-64 px-2">
            <div>
              <button
                onClick={() => setDrawer(!drawer)}
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none mr-5"
              >
                <span className="sr-only">Open main menu</span>
                <AiOutlineMenu fontSize={40} />
              </button>
            </div>
            <div className="xs:hidden sm:block">
              <Link
                href="https://github.com/pptsuwit"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <AiOutlinePicture fontSize={40} className="text-theme-500" />
                <span className="self-center text-2xl text-theme-500 font-semibold whitespace-nowrap  ">
                  Logo
                </span>
              </Link>
            </div>
          </div>
          <div className="flex xs:w-[calc(100%-8rem)] sm:w-[calc(100%-20rem)] px-8 xs:justify-center sm:justify-start">
            <span className="text-3xl">Title</span>
          </div>
          <div className="flex xs:w-16 sx:w-16  items-center">
            <button
              type="button"
              className="flex text-sm rounded-full ring-2 ring-theme-500"
              onClick={() => setMenu(!menu)}
            >
              <span className="sr-only">Open menu</span>
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full ">
                <Image
                  unoptimized={true}
                  priority={true}
                  loader={() => profileImage}
                  src={profileImage}
                  // width={500}
                  // height={500}
                  fill={true}
                  alt="avatar"
                />
              </div>
            </button>
            {/* <!-- Dropdown menu --> */}
            {menu && (
              <div
                ref={ref}
                className="absolute top-11 right-5  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow "
              >
                <div className="px-4 py-3 ">
                  <span className="block text-sm text-theme-500 font-bold">
                    {name}
                  </span>
                  <span className="block text-sm  text-gray-500 truncate font-bold">
                    {email}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  {liMenuList}
                  <li>
                    <a
                      onClick={signOut}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
