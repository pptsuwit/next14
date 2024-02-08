"use client";

import Link from "next/link";

interface TableHeader {
  name: string;
  align: string;
}
interface TableProps<T> {
  header: TableHeader[];
  data: T[];
  action: ActionButton;
}
interface ActionButton {
  status: boolean;
  edit?: boolean;
  delete?: boolean;
}
export default function Table<T extends object>(props: TableProps<T>) {
  let data: Object[] = [];
  props?.data?.map((item) => {
    data.push(Object.values(item));
  });
  const tableCells = data.map((cells, index) => {
    let cell;
    if (cells instanceof Array) {
      cell = cells.map((c, cIndex) => {
        return (
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            key={cIndex}
          >
            {c}
          </td>
        );
      });
    }
    return (
      <tr className="bg-white border-b hover:bg-gray-50 " key={index}>
        {cell}
        {props.action.status !== false && (
          <td className="px-6 py-4 text-center">
            {props.action.edit !== false && (
              <Link
                href="#"
                className="font-medium text-blue-600 hover:underline px-2"
              >
                Edit
              </Link>
            )}
            {props.action.delete !== false && (
              <Link
                href="#"
                className="font-medium text-red-600 hover:underline px-2"
              >
                Delete
              </Link>
            )}
          </td>
        )}
      </tr>
    );
  });
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {props.header.map((header) => {
              return (
                <th
                  scope="col"
                  className={`px-6 py-3 ${"text-" + header.align}`}
                  key={header.name}
                >
                  {header.name}
                </th>
              );
            })}
            {props.action.status !== false &&
              (props.action.edit !== false ||
                props.action.delete !== false) && (
                <th scope="col" className="px-6 py-3 text-center">
                  <span className="sr-only">Action</span>
                  Action
                </th>
              )}
          </tr>
        </thead>
        <tbody>{tableCells}</tbody>
      </table>
    </div>
  );
}