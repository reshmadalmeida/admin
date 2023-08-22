import React from "react";
import { Box } from "@mui/material";
import Transactions from "../components/Transactions";
import Subscribers from "../components/Subscribers";

function Dashboard() {
  return (
    <Box pt={4} m="30px" sx={{ width: "fit-content" }}>
      <Subscribers />
      {/* <Box pt={1}> */}
      <Transactions />
      {/* </Box> */}
    </Box>
  );
}

export default Dashboard;
