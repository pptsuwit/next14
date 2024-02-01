"use client";

import { useGlobalContext } from "@/contexts/store";

export default function page() {
  useGlobalContext().setTitle("Customer Management");
  return <div>page</div>;
}
