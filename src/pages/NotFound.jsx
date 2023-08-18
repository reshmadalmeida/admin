import { Box, Typography } from "@mui/material";

function NotFound() {
  return (
    <Box pt={4} m={"auto"} sx={{ width: "50%" }}>
      <Typography
        pt={12}
        pb={2}
        variant="h6"
        fontWeight={800}
        fontSize={24}
        color={"#404349"}
        textAlign={"center"}
      >
        Page you are looking for is not found.
      </Typography>
    </Box>
  );
}

export default NotFound;
