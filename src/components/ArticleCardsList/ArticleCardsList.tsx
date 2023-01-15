import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArticleCard from "../ArticleCard";
import Loader from "../Loader/Loader";
import { useFilteredArticles } from "../../hooks";
import { IArticleProps } from "../../interfaces";
import s from "./ArticleCardsList.module.scss";

const ArticleCardsList: React.FC = () => {
  const location = useLocation();
  const { filteredData, error, isLoading } = useFilteredArticles();

  return (
    <>
      {isLoading && <Loader />}
      {(error && <h2>Something is wrong!</h2>) ||
        (filteredData && (
          <>
            <Box>
              <Typography className={s.counter}>
                Results: {filteredData.length}
              </Typography>
            </Box>

            <ul className={s.cardsList}>
              {filteredData.slice(0, 12).map((article: IArticleProps) => (
                <li className={s.CardItem} key={article.id}>
                  <Link to={`/${article.id}`} state={{ from: location }}>
                    <ArticleCard {...article} />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))}
    </>
  );
};

export default ArticleCardsList;
