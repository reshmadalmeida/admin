import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Inter',
  },
  overrides: {
    MuiExpansionPanelSummary: {
      root: {
        "&:hover:not(.Mui-disabled)": {
          cursor: "none"
        }
      }
    }
  }
});