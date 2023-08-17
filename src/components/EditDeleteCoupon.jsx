import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Edit, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

function EditDeleteCoupon({ anchorEl, handleEdit, handleClose, handleDelete }) {
  return (
    <>
      {/* <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton> */}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box display="flex" p={2} justifyContent={"start"} onClick={handleEdit}>
          <IconButton>
            <Edit />
          </IconButton>
          <Typography variant="body1" paddingTop={2}>
            Edit
          </Typography>
        </Box>
        <Box
          display="flex"
          p={3}
          justifyContent={"start"}
          onClick={handleDelete}
        >
          <IconButton>
            <Delete />
          </IconButton>
          <Typography variant="body1" paddingTop={1}>
            Deactivate
          </Typography>
        </Box>
      </Popover>
    </>
  );
}

export default EditDeleteCoupon;
