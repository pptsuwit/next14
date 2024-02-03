"use client";

import { useGlobalContext } from "@/contexts/store";
import { useEffect } from "react";

export default function page() {
  const { setTitle } = useGlobalContext();
  useEffect(() => {
    setTitle("Customer Management");
  }, []);
  return <div>page</div>;
}
