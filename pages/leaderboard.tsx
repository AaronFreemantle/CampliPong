import React from "react";
import { useTable, Column } from "react-table";

type Data = {
  id: string;
  date: string;
  firstName: string;
  lastName: string;
  email: string;
  view: React.ReactNode;
};

const createArr = (n: number): Data[] => {
  const data: Data[] = [];
  for (let i = 0; i < n; i += 1) {
    data.push({
      id: `ID-${Math.random().toFixed(4)}`,
      date: new Date().toDateString(),
      firstName: `Rick #${i}`,
      lastName: `Sanchez #${i}`,
      email: `morty_${i}@rick.space`,
      view: <button>View</button>,
    });
  }
  return data;
};

export function Leaderboard() {
  const data = React.useMemo<Data[]>(() => createArr(10), []);
  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Date Requested",
        accessor: "date",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        accessor: "view",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Data>({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={column.id} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td key={cell.value} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Leaderboard;
