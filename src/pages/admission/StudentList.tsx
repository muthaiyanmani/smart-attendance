import React from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../components/global/Sidebar";
import Table from "../../components/global/Table";

type Props = {};

const StudentList = (props: Props) => {
  const params = useParams();

  // const columns = React.useMemo(
  //   () => [
  //     {
  //       Header: "No.",
  //       columns: [
  //         {
  //           Header: "No.",
  //           accessor: "no",
  //           sortable: true,
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Name",
  //       columns: [
  //         {
  //           Header: "Name",
  //           accessor: "name",
  //           sortable: true,
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Category",
  //       columns: [
  //         {
  //           Header: "Category",
  //           accessor: "category",
  //           sortable: true,
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Genre",
  //       columns: [
  //         {
  //           Header: "Genre",
  //           accessor: "genre",
  //           sortable: true,
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Content Creator",
  //       columns: [
  //         {
  //           Header: "Content Creator",
  //           accessor: "createdBy",
  //           sortable: true,
  //           Filter: DisabledFilter,
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Date Of Creation",
  //       columns: [
  //         {
  //           Header: "Date Of Creation",
  //           accessor: "createdAt",
  //           Filter: DateSelectFilter,
  //           filter: "exact",
  //           sortable: true,
  //           Cell: ({ row }) => {
  //             return (
  //               <span
  //                 style={{
  //                   display: "flex",
  //                   flexDirection: "column",
  //                   alignItems: "center",
  //                 }}
  //               >
  //                 <span>{row.original.createdAt.split("T")[0]}</span>
  //                 {/* <span>{row.original.createdAt.substring(10,25)}</span> */}
  //               </span>
  //             );
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       Header: "Release Date",
  //       columns: [
  //         {
  //           Header: "Release Date",
  //           accessor: "releaseDate",
  //           sortable: true,
  //           Filter: DateSelectFilter,
  //           filter: "exact",
  //         },
  //       ],
  //     },
  //   ],
  //   []
  // );

  return (
    <Sidebar>
      {" "}
      <div className="flex  flex-col">
        <div className="flex mt-12 min-w-full sm:px-6 lg:px-8 justify-between">
          <div className="text-xl ">
            <h1>Students list</h1>
          </div>
          <div>
            <Link
              to={`/dashboard/admissions/${params.class}/new`}
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Student
            </Link>
          </div>
        </div>
        {/* <Table data={} columns={columns} /> */}
      </div>
    </Sidebar>
  );
};

export default StudentList;
