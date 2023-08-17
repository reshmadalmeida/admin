import React from "react";
import { Box, Typography } from "@mui/material";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "", errorInfo: "" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("error in EB", error);
    console.log("error info in EB", errorInfo);

    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box mt={10}>
          <Typography variant="h5" textAlign="center">
            Something Went Wrong
          </Typography>
          <Typography variant="h6" textAlign="center">
            Please try Again
          </Typography>
        </Box>
      );
    }

    return this.props.children;
  }
}
