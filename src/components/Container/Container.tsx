import { Box } from "@mui/material";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: "50px 75px 65px",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
