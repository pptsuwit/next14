"use client";

import { useGlobalContext } from "@/contexts/store";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
export default function page() {
  const { setTitle } = useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setTitle("User Management");
  }, []);
  const header = [
    { name: "Product name", align: "left" },
    { name: "Color", align: "left" },
    { name: "Category", align: "left" },
    { name: "Price", align: "left" },
  ];
  const data = [
    {
      name: `Apple MacBook Pro 17"`,
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: `Microsoft Surface Pro`,
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: `Magic Mouse 2`,
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
  ];
  return (
    <>
      <Table
        header={header}
        data={data}
        action={{
          status: true,
          // edit: false,
          // delete: false,
        }}
      />
      <Pagination
        pagination={{
          currentPage: currentPage,
          // recordPerPage: 10,
          totalPage: 10,
          // totalRecord: 0,
        }}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
