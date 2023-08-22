import React from "react";
import { Box, Typography } from "@mui/material";

function Subscribers() {
  const product_subscribers = {
    "Total Subscribers": "452",
    "Test Prep": "408",
    "Basic Sciences": "20",
    Combo: "24",
  };

  const productSubscribersCount = Object.keys(product_subscribers).map(
    (key) => (
      <Box
        key={key}
        display="inline-block"
        pr={4}
        justifyContent={"space-evenly"}
      >
        <Typography variant="h4">{product_subscribers[key]}</Typography>
        <Typography variant="subtitle1" color={"#A8A8A8"}>
          {key}
        </Typography>
      </Box>
    )
  )
  return (
    <>
      <Typography
        pt={6}
        pb={2}
        variant="h6"
        fontWeight={800}
        fontSize={24}
        color="#404349"
      >
        Subscribers
      </Typography>
      <div>{productSubscribersCount}</div>;
    </>
  );
}

export default Subscribers;
