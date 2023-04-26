import React, { useMemo } from "react";
import "./Transactions.css";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA";

import parse from "html-react-parser";
import { BsCheckLg } from "react-icons/bs";
import { TiWarning } from "react-icons/ti";

const Transactions = () => {
  const COLUMNS = [
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ value }) => {
        return (
          <div
            className={
              value == "Confirmed"
                ? "trans__status__confirmed"
                : "trans__status__pending"
            }
          >
            {value == "Confirmed" ? (
              <BsCheckLg size={30} />
            ) : (
              <TiWarning size={30} />
            )}
            {value}
          </div>
        );
      },
    },
    {
      Header: "Amount(USD)",
      accessor: "amount",
    },

    {
      Header: "Wallet",
      accessor: "wallet",
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setGlobalFilter,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },

    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <div className="trans__container">
      <div className="trans__content">
        <div className="trans__head">
          <h2>LATEST TRANSACTIONS</h2>
          <p>Live deposit and withdrawal history</p>
        </div>
        <div className="trans__body">
          <div class="scroll-down">
            <div className="trans__table">
              <table cellPadding="0" cellSpacing="0" {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
