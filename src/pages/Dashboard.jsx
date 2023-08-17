import React from "react";
import { Box, Typography } from "@mui/material";

function Dashboard() {
  return (
    <Box pt={4} m={"auto"} sx={{ width: "50%" }}>
      <Typography
        pt={12}
        pb={2}
        variant="h6"
        fontWeight={800}
        fontSize={24}
        color={"#404349"}
      >
        Dashboard
      </Typography>
    </Box>
  );
}

export default Dashboard;
