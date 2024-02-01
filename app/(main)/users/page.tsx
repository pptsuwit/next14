"use client";

import { useGlobalContext } from "@/contexts/store";

export default function page() {
  useGlobalContext().setTitle("User Management");
  return <div>page</div>;
}
