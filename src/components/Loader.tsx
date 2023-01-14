import { Box, CircularProgress } from "@mui/material";

const Loader: React.FC = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      zIndex: 999,
    }}
  >
    <CircularProgress sx={{ margin: "auto" }} />
  </Box>
);

export default Loader;
