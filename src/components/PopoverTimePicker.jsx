import React from "react";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function PopoverTimePicker({
  selectedDate,
  handleTimeChange,
  helperText,
  error,
  label,
  defaultValue,
}) {
  console.log(selectedDate, defaultValue, "...");
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDateTimePicker
          defaultValue={dayjs(defaultValue)}
          label={label}
          format="DD MMM YYYY HH:mm:A"
          onChange={handleTimeChange}
          slotProps={{
            textField: {
              helperText,
              error,
            },
          }}
          disablePast
        />
      </LocalizationProvider>
    </>
  );
}

export default PopoverTimePicker;
