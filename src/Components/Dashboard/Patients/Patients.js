import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "gender", label: "Gender", minWidth: 100 },
  {
    id: "age",
    label: "Age",
    minWidth: 170,
    align: 'center'
  },
  {
    id: "weight",
    label: "Weight-kg",
    minWidth: 170,
    align: 'center'
  },
  {
    id: "phone",
    label: "Contact",
    minWidth: 170,
    align: 'center'
  },
];
const Patients = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    fetch("https://salty-peak-15581.herokuapp.com/allAppointments")
      .then((res) => res.json())
      .then((data) => setRowData(data));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{backgroundColor: "#F4FDFB",}} className="container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10">
        <h3 className="py-3 pb-5 fw-bolder" style={{ color: "#3A4256" }}>
          Patients
        </h3>
        <div>
          <Paper sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" colSpan={2}>
                      <h4 style={{ color: "#1cc7c1", fontWeight: "700" }}>
                        All Patients
                      </h4>
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      <p style={{ color: "#3A4256", fontWeight: "600" }}>
                        Details
                      </p>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ top: 57, minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row._id}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rowData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Patients;
