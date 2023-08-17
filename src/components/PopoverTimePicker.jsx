import { Popover } from "@mui/material";
import {
  LocalizationProvider,
  StaticTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import React, { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function PopoverTimePicker({
  selectedDate,
  handleDateChange,
  helperText,
  error,
  label,
}) {
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <>
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label={label}
          value={dayjs(selectedDate)}
          onChange={handleDateChange}
          slotProps={{
            textField: {
              helperText,
              error,
            },
          }}
        />
      </LocalizationProvider>

      {/* <StaticTimePicker defaultValue={dayjs("2022-04-17T15:30")} /> */}
      {/* </Popover> */}
    </>
  );
}

export default PopoverTimePicker;
