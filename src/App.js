import React, { useEffect, useState } from "react";
import "./App.css";

import {
  Table,
  TableBody,
  TableFooter,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
} from "@mui/material";

import { TablePagination } from "@material-ui/core"; //imported from here to avoid warning from @mui/material src
import MyRow from "./MyRow";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleSave = (id, value) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        return { ...row, title: value };
      }
      return row;
    });
    setData(newData);
  };

  const handleRemove = (id) => {
    let newData = data.filter((row) => row.id !== id);
    setData(newData);
  };

  // const interval  = () => {

  //   setInterval(()=>{
  //   const newData = data.map((row) => {
  //     return {
  //       ...row,
  //       id: Math.floor(Math.random()*1000000),
  //       albumId: Math.floor(Math.random()*1000000)
  //     }
  //   })
  //   setData(newData)

  // },2000)}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div className="table-container">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Album ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Thumbnail</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                // slice() for pagination purposes
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <MyRow
                      key={row.id}
                      row={row}
                      handleSave={handleSave}
                      handleRemove={handleRemove}
                    />
                  ))
              }
            </TableBody>

            <TableFooter>
              <TablePagination
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[20, 30, 40, 50]}
              />
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
