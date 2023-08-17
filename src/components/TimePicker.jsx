import { Box, Popover } from "@mui/material";
import { LocalizationProvider, StaticTimePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function TimePicker() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {" "}
      {/* <Popover
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
      > */}
      {/* <Box display="flex" p={2} justifyContent={"start"}> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticTimePicker defaultValue={dayjs("2022-04-17T15:30")} />
      </LocalizationProvider>
      {/* </Box> */}
      {/* </Popover> */}
    </>
  );
}

export default TimePicker;
