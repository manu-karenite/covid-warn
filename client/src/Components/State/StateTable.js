import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", maxWidth: 100 },
  {
    id: "confirmed",
    label: "Confirmed",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "recovered",
    label: "Recovered",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "deceased",
    label: "Deceased",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "vaccinated1",
    label: "Vaccinated-1",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "vaccinated2",
    label: "Vaccinated-2",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "vaccinated3",
    label: "Vaccinated-3",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
  {
    id: "tested",
    label: "Tested",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-IN"),
  },
];

export default function StickyHeadTable({ stateWise }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows = stateWise;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
