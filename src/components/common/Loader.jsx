import PropTypes from "prop-types";

import { Box, CircularProgress, Grid, Typography } from "@mui/material";

Loader.protoTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: "Loading...",
};

export default function Loader({ message }) {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.7)",
        zIndex: 1500,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <CircularProgress size={32} />
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            sx={{
              display: "block",
              maxWidth: 200,
              marginTop: "20px",
              color: "black",
            }}
          >
            {message}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
