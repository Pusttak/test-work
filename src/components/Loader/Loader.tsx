import { Box, CircularProgress } from "@mui/material";
import s from "./Loader.module.scss";

const Loader: React.FC = () => (
  <Box className={s.loader}>
    <CircularProgress sx={{ margin: "auto" }} />
  </Box>
);

export default Loader;
