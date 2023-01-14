import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Highlighter from "react-highlight-words";

import { useGetDate, useShortText, useAppSelector } from "../../hooks";
import {
  ArticleCard,
  ArticleCardActionArea,
  ArticleCardContent,
  ArticleDate,
} from "./ArticleCard.styled";

const ArticleCardsList: React.FC<Article> = ({
  title,
  summary,
  imageUrl,
  publishedAt,
}) => {
  const shortSummary = useShortText(summary);
  const shortTitle = useShortText(title);
  const date = useGetDate(publishedAt);
  const query = useAppSelector((state) => state.query);

  return (
    <ArticleCard>
      <ArticleCardActionArea>
        <CardMedia component="img" height="217" image={imageUrl} alt={title} />
        <ArticleCardContent>
          <ArticleDate>
            <CalendarTodayOutlinedIcon fontSize="small" />
            {date}
          </ArticleDate>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            sx={{
              fontSize: 24,
              fontWeight: 600,
              color: "#363636",
              marginBottom: "20px",
            }}
          >
            <Highlighter
              searchWords={[...query.split(" ")]}
              textToHighlight={shortTitle}
            />
          </Typography>
          <Typography color="#363636" sx={{ marginBottom: "20px" }}>
            <Highlighter
              searchWords={[...query.split(" ")]}
              textToHighlight={shortSummary}
            />
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>Read more →</Typography>
        </ArticleCardContent>
      </ArticleCardActionArea>
    </ArticleCard>
  );
};

type Article = {
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
  id: number;
};

export default ArticleCardsList;
