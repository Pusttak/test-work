import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArticleCard from "../ArticleCard";
import { CardsList, CardItem } from "./ArticleCardsList.styled";
import {
  useGetArticlesByQueryQuery,
  useGetArticlesCountQuery,
} from "../../redux/articles-slice";
import { useAppSelector } from "../../hooks";
import Loader from "../Loader";

const ArticleCardsList: React.FC = () => {
  const location = useLocation();
  const query = useAppSelector((state) => state.query);
  const { data, error, isLoading } = useGetArticlesByQueryQuery(query);
  const { data: count } = useGetArticlesCountQuery(query);

  return (
    <>
      {isLoading && <Loader />}
      {(error && <h2>Something is wrong!</h2>) ||
        (data && (
          <>
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  marginBottom: "45px",
                  borderBottom: "1px solid #EAEAEA",
                }}
              >
                Results: {count}
              </Typography>
            </Box>

            <CardsList>
              {data.map((article: Article) => (
                <CardItem key={article.id}>
                  <Link to={`/${article.id}`} state={{ from: location }}>
                    <ArticleCard {...article} />
                  </Link>
                </CardItem>
              ))}
            </CardsList>
          </>
        ))}
    </>
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
