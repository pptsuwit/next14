"use client";

import { useGlobalContext } from "@/contexts/store";
import Link from "next/link";
import { useState } from "react";

import {
  AiOutlinePieChart,
  AiOutlineShoppingCart,
  AiOutlineBuild,
  AiOutlineTeam,
  AiOutlineCreditCard,
  AiOutlineException,
  AiOutlineRead,
  AiOutlineInbox,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineIdcard,
} from "react-icons/ai";
export default function Drawer() {
  const { drawer, setDrawer } = useGlobalContext();
  const iconSize = { fontSize: 25 };
  const [menu, setMenu] = useState([
    {
      name: "Dashboard",
      icon: <AiOutlinePieChart {...iconSize} />,
      link: "/backoffice/dashboard",
    },
    {
      name: "Users",
      icon: <AiOutlineTeam {...iconSize} />,
      link: "/backoffice/users",
    },
    {
      name: "Customer",
      icon: <AiOutlineIdcard {...iconSize} />,
      link: "/backoffice/customers",
    },
    {
      name: "E-commerce (Example Dropdown Menu)",
      icon: <AiOutlineShoppingCart {...iconSize} />,
      // link: "/backoffice/e-commerce",
      active: false,
      subMenu: [
        {
          name: "Product (Example Dropdown Menu)",
          icon: <AiOutlineBuild {...iconSize} />,
          // link: "/product",
          link: "#",
        },
        {
          name: "Billing (Example Dropdown Menu)",
          icon: <AiOutlineCreditCard {...iconSize} />,
          // link: "/billing",
          link: "#",
        },
        {
          name: "Invioce (Example Dropdown Menu)",
          icon: <AiOutlineException {...iconSize} />,
          // link: "/invioce",
          link: "#",
        },
      ],
    },
    {
      name: "Kanban (Example Menu)",
      icon: <AiOutlineRead {...iconSize} />,
      // link: "/kanban",
      link: "#",
      tag: "pro",
    },
    {
      name: "Inbox (Example Menu)",
      icon: <AiOutlineInbox {...iconSize} />,
      // link: "/inbox",
      link: "#",
      notification: "3",
    },
  ]);
  const uiMenu = (
    <ul className="space-y-2 font-medium">
      {menu.map((item, index) => {
        let result;
        if (item.subMenu) {
          result = (
            <li key={index}>
              <button
                onClick={() => toggleSubmenu(item)}
                className="flex items-center w-full xs:px-8 sm:px-2 p-2 text-base text-gray-900  rounded-lg group hover:bg-gray-100 transition duration-75 ease-in-out"
              >
                {item.icon}
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap overflow-x-hidden text-ellipsis">
                  {item.name}
                </span>
                <AiOutlineDown fontSize={15} />
              </button>
              {item.active && (
                <ul className="py-2 space-y-2">
                  {item.subMenu.map((subMenu, subIndex) => {
                    return (
                      <li key={subIndex}>
                        <Link
                          href={subMenu.link}
                          className="flex items-center w-full p-2 xs:pl-24 sm:pl-11 text-gray-900 transition duration-75 ease-in-out rounded-lg  group hover:bg-gray-100"
                        >
                          {subMenu.icon}
                          <span className="ms-3 whitespace-nowrap overflow-x-hidden text-ellipsis">
                            {subMenu.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        } else {
          result = (
            <li key={index}>
              <Link
                href={item.link}
                className="flex items-center xs:px-8 sm:px-2 p-2 text-gray-900 rounded-lg hover:bg-gray-100 group "
              >
                {item.icon}
                <span className="ms-3 whitespace-nowrap overflow-x-hidden text-ellipsis">
                  {item.name}
                </span>
              </Link>
            </li>
          );
        }
        return result;
      })}
    </ul>
  );

  function toggleSubmenu(target: any) {
    setMenu(
      menu.map((item: any) => {
        if (item.name === target.name) {
          return {
            ...item,
            active: !item.active,
          };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <aside
        id="drawer-navigation"
        className={`h-[calc(100svh-4rem)] p-4 bg-white xs:w-screen sm:w-64 shadow-md transition-transform overflow-y-auto border-t-2 fixed top-16 z-40
         ${drawer ? "" : "-translate-x-full"} 
         `}
      >
        <h5 className="text-base xs:text-center sm:text-left font-semibold text-gray-500 uppercase">
          Menu
        </h5>
        <button
          onClick={() => setDrawer(!drawer)}
          type="button"
          data-drawer-hide={"drawer-navigation"}
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
        >
          <AiOutlineClose {...iconSize} />
          <span className="sr-only">Close menu</span>
        </button>
        <div className="py-4 overflow-y-auto">{uiMenu}</div>
      </aside>
    </>
  );
}
