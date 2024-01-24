"use client";

import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    console.log("Use Effect");
  }, []);

  return <div>Dashboard</div>;
}
