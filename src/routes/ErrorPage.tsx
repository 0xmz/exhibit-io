import { Box, Typography } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const ErrorPage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box>
        <Typography>"Oops! This page does not exist."</Typography>
      </Box>
    </>
  );
};

export default ErrorPage;
