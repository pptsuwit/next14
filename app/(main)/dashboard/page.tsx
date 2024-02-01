"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AiOutlinePieChart,
  AiOutlineShoppingCart,
  AiOutlineBuild,
  AiOutlineDown,
} from "react-icons/ai";
import { useGlobalContext } from "@/contexts/store";
export default function page() {
  useGlobalContext().setTitle("Dashboard");

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="bg-white border rounded-md shadow-md flex justify-center py-4">
        Test Screen
      </div>
    </>
  );
}
