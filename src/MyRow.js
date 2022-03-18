import { TableRow, TableCell } from "@mui/material";
import { useState } from "react";

const MyRow = ({ row, handleSave, handleRemove, setData, data }) => {
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState(row.title);


  return (
    <>
      <TableRow>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.albumId}</TableCell>
        <TableCell key={row.title} id={row.title}>
          <input
            title={value}
            type="text"
            value={value}
            disabled={disabled}
            className="title"
            
            onChange={(e) => setValue(e.target.value)}
            name={"title"}
          />
        </TableCell>
        <TableCell><img src={row.thumbnailUrl} width="60px" height="60px"/></TableCell>
        <TableCell>
          <button className={`btn-${disabled ? 'edit' : 'done'}`}
            onClick={() => {
              if (disabled) {
                setDisabled(false);
              } else {
                //   save changes
                handleSave(row.id, value);
                // and disable editing
                setDisabled(true);
              }
            }}
          >
            {disabled ? "Edit" : "Done"}
          </button>
          {!disabled && (
            <button className="btn-cancel"
              onClick={() => {
                setValue(row.title);
                setDisabled(true);
              }}
            >
              Cancel
            </button>
          )}
          <button className="btn-remove" onClick={() => handleRemove(row.id)}>Remove</button>
        </TableCell>
        <TableCell>
         
        </TableCell>
      </TableRow>
    </>
  );
};

export default MyRow;
