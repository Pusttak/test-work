import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ArticleContainer = styled(Box)`
  position: relative;
  width: calc(100% - 75px * 2);
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 35px;
  min-height: calc(100vh - 150px - 100px - 8px);
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  padding: 35px 75px 50px;
`;

export const Title = styled("h1")`
  font-size: 24px;
  margin-bottom: 50px;
`;

export const Summary = styled("p")`
  font-size: 18px;
  color: #000000;
`;

export const GoBackLink = styled("p")`
  font-weight: 700;
  margin-bottom: 45px;
  margin-left: 150px;
  cursor: pointer;
`;
