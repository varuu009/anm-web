import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
} from "@mui/material";

const StyledTable = ({ data, titles }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  console.log(paginatedData)

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" ,marginTop:1}} />
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#1976d2" }}>
            <TableRow>
              {titles.map((header) => (
                <TableCell
                  key={header}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
  {paginatedData.map((row, index) => (
    <TableRow key={index}>
      {Object.entries(row).map(([key, value], colIndex) => (
        <TableCell
          key={colIndex}
          style={{
            color: key === "thirdValue" 
              ? value === "ACTIVE" 
                ? "green" 
                : "red"
              : "black"
          }}
        >
          {value || "-"}
        </TableCell>
      ))}
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ mt: 2 }}
      />
    </div>
  );
};

export default StyledTable;
