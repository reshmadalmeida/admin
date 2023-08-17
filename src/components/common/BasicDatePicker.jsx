import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { dateFormat } from "../../utils/Utils";
import { StaticTimePicker } from "@mui/x-date-pickers";
import PopoverTimePicker from "../PopoverTimePicker";

function BasicDatePicker({
  label,
  selectedDate,
  handleDateChange,
  helperText,
  error,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={dayjs(selectedDate)}
        format={"DD MMM YYYY"}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            helperText,
            error,
          },
          inputAdornment: null,
          
        }}
      
        disablePast
      />
    </LocalizationProvider>
  );
}
export default BasicDatePicker;
