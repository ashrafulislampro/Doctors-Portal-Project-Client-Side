import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'date', label: 'Date', minWidth: 170 },
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'phone', label: 'Contact', minWidth: 170 },
  {
    id: 'prescription',
    label: 'Prescription',
    minWidth: 170,
  }
];

const Prescription = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    fetch("https://salty-peak-15581.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ date: loggedInUser}),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [loggedInUser]);
 

 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(10);

 const handleChangePage = (event, newPage) => {
   setPage(newPage);
 };

 const handleChangeRowsPerPage = (event) => {
   setRowsPerPage(+event.target.value);
   setPage(0);
 };

  return (
    <div style={{ backgroundColor: "#F4FDFB" }} className="container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
        
      <div className="col-md-10">
      <h3 className="py-4" style={{color : "#3A4256", fontWeight: "700"}}>Prescriptions</h3>
      <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={2}>
                <h4 style={{ color: "#1cc7c1", fontWeight: "700" }}>All Prescriptions</h4>
              </TableCell>
              <TableCell align="center" colSpan={3}>
                {
                  loggedInUser ?  <p style={{color: '#3A4256', fontWeight: "700"}}>{(new Date()).toDateString()}</p>
                  : <p style={{color: '#3A4256', fontWeight: "700"}}>{(loggedInUser).toDateString()}</p>
                }
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
            {appointments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
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
        count={appointments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </div>
    </div>
  );
};

export default Prescription;
