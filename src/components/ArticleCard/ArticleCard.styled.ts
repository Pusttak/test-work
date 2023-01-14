import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

export const ArticleCard = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  height: 100%;
  border: 1px solid #eaeaea;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

export const ArticleCardActionArea = styled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: start;
`;

export const ArticleCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 25px;
`;

export const ArticleDate = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 25px;
  opacity: 0.6;

  & svg {
    width: 16px;
    height: 16px;
  }
`;
