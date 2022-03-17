import React, { useEffect, useState } from "react";
import "./App.css";

import {
  TablePagination,
  Table,
  TableBody,
  TableFooter,
  TableContainer,
  TableRow,
  TableHead,
} from "@mui/material";

import TableCell from "@mui/material/TableCell";

function App() {
  const [data, setData] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setData(data.map((item) => ({ ...item, enableEdit: true })));
      });
  }, []);

  const removeRow = (e) => {
    const { id } = e.target.parentElement;
    let arr = data.filter((elem) => elem.id != id);
    setData(arr);
  };

  const handleClickEdit = (e) => {
    const { id } = e.target.parentElement;
    setToggleEdit(!toggleEdit);
    let newData = [...data];
    newData[id-1].enableEdit = !newData[id-1].enableEdit;
    setData(newData);
  };

  const handleChange = (e) => {
    const { value, id } = e.target;
    let newData = [...data];
    newData[id-1].title = value;
    setData(newData);
  };

  const handleDone = (e) => {
    const { id } = e.target.parentElement;
    let newData = [...data];
    newData[id-1].enableEdit = !newData[id-1].enableEdit;

    setData(newData);
    console.log(data[id-1]);
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
                {/* <TableCell>Thumbnail</TableCell> */}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow id={row.id} key={row.id}>
                  <TableCell key={row.id + "_id"} id={row.id + "_id"}>
                    {row.id}
                  </TableCell>
                  <TableCell>{row.albumId}</TableCell>
                  <TableCell key={row.title} id={row.title}>
                    <input
                      type="text"
                      disabled={row.enableEdit}
                      className="title"
                      defaultValue={row.title}
                      id={row.id}
                      onChange={(e) => handleChange(e)}
                      name={"title"}
                    />
                  </TableCell>
                  {/* <TableCell><img src={row.thumbnailUrl} /></TableCell> */}
                  <TableCell id={row.id}>
                    <button onClick={(e) => removeRow(e)}>Remove</button>
                    {row.enableEdit && (
                      <button onClick={(e) => handleClickEdit(e)}>Edit</button>
                    )}
                    {row.enableEdit === false && (
                      <button onClick={(e) => handleDone(e)}>Done</button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              {/* <TablePagination 
          TablePagination
          1={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          labelRowsPerPage={<span>Rows:</span>}
          labelDisplayedRows={({ page }) => {
            return `Page: ${page}`;
          }}
          backIconButtonProps={{
            color: "secondary"
          }}
          nextIconButtonProps={{ color: "secondary" }}
          SelectProps={{
            inputProps: {
              "aria-label": "page number"
            }
          }}
          showFirstButton={true}
          showLastButton={true}
          //ActionsComponent={TablePaginationActions}
          //component={Box}
          //sx and classes prop discussed in styling section
      /> 
          /> */}
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
