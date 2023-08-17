import { memo } from "react";
import { FormHelperText, MenuItem, Select } from "@mui/material";

const MuiDropdownComponent = ({
  list,
  placeholder,
  selectedField,
  handleDDChange,
  helperText,
}) => {
  return (
    <div>
      <Select
        value={selectedField}
        placeholder={placeholder}
        // sx={{}}
        onChange={handleDDChange}
        slotProps={{
          textField: {
            helperText: helperText,
          },
        }}
        sx={{
          width: "100%",
          "& .MuiSelect-icon": {
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.54)",
            borderRadius: "50%",
          },
        }}
      >
        {list?.length > 0 &&
          list?.map((listItem, index) => (
            <MenuItem
              key={`${listItem}-${index}`}
              value={listItem?.title}
              onClick={() => handleDDChange}
            >
              {listItem?.title || listItem?.name}
            </MenuItem>
          ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </div>
  );
};

export default memo(MuiDropdownComponent);
