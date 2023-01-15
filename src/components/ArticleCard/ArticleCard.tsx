import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Highlighter from "react-highlight-words";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";

import { useGetDate, useShortText, useAppSelector } from "../../hooks";
import { IArticleProps } from "../../interfaces";
import s from "./ArticleCard.module.scss";

const ArticleCardsList: React.FC<IArticleProps> = ({
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
    <Card className={s.card}>
      <CardActionArea className={s.cardAction}>
        <CardMedia component="img" height="217" image={imageUrl} alt={title} />
        <CardContent className={s.cardContent}>
          <Typography className={s.articleDate}>
            <CalendarTodayOutlinedIcon fontSize="small" />
            {date}
          </Typography>
          <Typography
            gutterBottom
            variant="h4"
            component="h4"
            className={s.title}
          >
            <Highlighter
              searchWords={[...query.split(" ")]}
              textToHighlight={shortTitle}
            />
          </Typography>
          <Typography className={s.summary}>
            <Highlighter
              searchWords={[...query.split(" ")]}
              textToHighlight={shortSummary}
            />
          </Typography>
          <Typography className={s.link}>Read more →</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCardsList;
