import { Typography } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useEffect } from "react";
import { getRowData } from "../services/api";

const columns = [
  { field: "date", headerName: "Date", width: 120 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "product",
    headerName: "Product",
    width: 150,
    editable: true,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "code",
    headerName: "Code",
    width: 150,
    editable: true,
  },
];

// const rows = [
//   {
//     id: 1,
//     date: "23 Mar 2023",
//     name: "Manohar Singh",
//     email: "manohar868@gmail.com",
//     product: "Test prep",
//     amount: 24999,
//     code: "MANO12",
//   },
//   {
//     id: 2,
//     date: "23 Mar 2023",
//     name: "Man",
//     email: "man@gmail.com",
//     product: "Test prep",
//     amount: 24999,
//     code: "MANO12",
//   },
//   {
//     id: 3,
//     date: "23 Mar 2023",
//     name: "Man",
//     email: "man@gmail.com",
//     product: "Test prep",
//     amount: 24999,
//     code: "MANO12",
//   },
// ];
const boderStyle = "1px solid rgba(224, 224, 224, 1)";

function Transactions() {
  const [rowData, setRowData] = useState([]);
  
  useEffect(() => {
    getRowData().then(async (res) => {
      if (res.status === 200) {
        setRowData(res.data);
      } else console.log("error");
    });
  }, []);
  return (
    <>
      <Typography
        pt={6}
        pb={2}
        variant="h6"
        fontWeight={800}
        fontSize={24}
        color="#404349"
      >
        Transactions
      </Typography>
      <hr />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          // borderTop: boderStyle,
          // borderLeft: boderStyle,
          // borderRight: boderStyle,
          // borderRadius: "4px 4px 0 0",
          width: "fit-content",
        }}
      >
        {
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              // borderTop: boderStyle,
              // borderLeft: boderStyle,
              // borderRight: boderStyle,
              // borderRadius: "4px 4px 0 0",
              width: "fit-content",
            }}
            py={1}
            pr={1}
          >
            <TextField
              variant="outlined"
              size="small"
              value={""}
              onChange={(e) => {}}
              placeholder="Search here"
              inputProps={{
                style: {
                  padding: "4.5px 14px",
                },
              }}
              InputProps={{
                startAdornment: <SearchIcon fontSize="small" color="action" />,
                endAdornment: (
                  <IconButton
                    title="Clear"
                    aria-label="Clear"
                    size="small"
                    style={{
                      // visibility: searchText ? 'visible' : 'hidden',
                      borderRadius: "57%",
                      paddingRight: "1px",
                      margin: "0",
                      fontSize: "1.25rem",
                    }}
                    onClick={(e) => {}}
                  >
                    <ClearIcon fontSize="small" color="action" />
                  </IconButton>
                ),
              }}
              sx={{
                width: { xs: 1, sm: "auto" },
                m: (theme) => theme.spacing(1, 0.5, 1.5),
                "& .MuiSvgIcon-root": {
                  mr: 0.5,
                },
                "& .css-7sxom3-MuiDataGrid-root": {
                  borderRadius: "0 0 4px 4px",
                },
              }}
            />
          </Box>
        }
        {
          <Box
            sx={{
              display: "flex",
              flex: 1,
              alignItems: "end",
              justifyContent: "flex-end",
              // borderTop: boderStyle,
              // borderLeft: boderStyle,
              // borderRight: boderStyle,
              // borderRadius: "4px 4px 0 0",
              // width: "fit-content",
            }}
          >
            <FilterAltOutlinedIcon />
            <Typography>Filter</Typography>
            <ArrowDropDownOutlinedIcon />
          </Box>
        }
        {/* <Box> */}
        <MoreHorizOutlinedIcon />
        {/* </Box> */}
      </Box>
      <Box sx={{ width: "fit-content" }}>
        <DataGrid
          rows={rowData}
          columns={columns}
          pageSize={6}
          disableRowSelectionOnClick
          sx={{
            [`& .css-yrdy0g-MuiDataGrid-columnHeaderRow`]: {
              backgroundColor: "#E6E6E9",
              color: "black",
            },
            "& .css-15reuk0-MuiDataGrid-root MuiDataGrid-row :nth-of-type(even)":
              {
                backgroundColor: "#E6E6E9",
              },
          }}
        />
      </Box>
    </>
  );
}

export default Transactions;
