import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import EditDeleteCoupon from "../EditDeleteCoupon";

function CardListHeader({ coupon, code, handleEdit, handleDelete }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
      <Box pb={2}>
        <Typography color={"#A8A8A8"} fontSize="13px" fontWeight="500">
          Coupon Code
        </Typography>
        <Typography variant="h6">{code}</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            pointerEvents: "none",
            margin: "auto",
            backgroundColor: coupon?.type === "Active" ? "#269A5A" : "#A8A8A8",
            color: "#F7F7F7",
            "&:hover": {
              backgroundColor:
                coupon?.type === "Active" ? "#269A5A" : "#A8A8A8",
              color: "#F7F7F7",
            },
          }}
        >
          {coupon?.type}
        </Button>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <EditDeleteCoupon
          anchorEl={anchorEl}
          handleEdit={handleEdit}
          handleClose={handleClose}
          handleDelete={handleDelete}
        />
      </Box>
    </Box>
  );
}

export default CardListHeader;
