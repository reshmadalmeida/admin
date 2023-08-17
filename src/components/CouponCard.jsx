import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

function CouponCard({ handleCreateClick }) {
  return (
    <Card
      sx={{
        borderRadius: "4px",
        boxShadow: "1px 1px 2px 1px #E6E6E9",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flex: 1,
        }}
      >
        <IconButton>
          <LocalOfferOutlinedIcon color="#4A4A4A" sx={{ borderWidth: "1px" }} />
        </IconButton>
        <Typography variant="body2">
          Generate coupon codes that you can
          <br />
          share with learners
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            paddingRight: "auto 24px",
            backgroundColor: "#E6E6E9",
            color: "#404349",
            "&:hover": {
              backgroundColor: "#E6E6E9",
              color: "#404349",
            },
            boxShadow: "none",
          }}
          onClick={handleCreateClick}
        >
          <Typography
            textTransform={"capitalize"}
            variant="span"
            fontWeight={700}
            fontSize={12}
            color={"#404349"}
          >
            Create coupon
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default CouponCard;
