import React from "react";
import { Box, Typography } from "@mui/material";

import discountIcon from "../../assets/discount.svg";
import validityIcon from "../../assets/validity.svg";
import enrollmentIcon from "../../assets/enrollment.svg";

function CardListIcons({ discount, validity, enrollment }) {
  return (
    <Box display={"flex"} fontSize="12px">
      <Typography color={"#A8A8A8"} pr={4} display="flex" alignItems="center">
        <img src={discountIcon} alt="discount" />
        <Typography variant="caption" pl={0.6}>
          {`${discount} % off`}
        </Typography>
      </Typography>
      <Typography
        color={"#A8A8A8"}
        pr={4}
        fontSize="12px"
        display="flex"
        alignItems="center"
      >
        <img src={validityIcon} alt="validity" />
        <Typography variant="caption" pl={0.6}>
          {validity}
        </Typography>
      </Typography>
      <Typography
        color={"#A8A8A8"}
        pr={4}
        fontSize="12px"
        display="flex"
        alignItems="center"
      >
        <img src={enrollmentIcon} alt="enrollment" />
        <Typography variant="caption" pl={0.6}>
          {`${enrollment || "unlimited"} Enrollments`}
        </Typography>
      </Typography>
    </Box>
  );
}

export default CardListIcons;
