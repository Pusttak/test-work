import { Link, useParams, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import Loader from "../../components/Loader/Loader";
import { useGetArticleByIdQuery } from "../../redux/articles-slice";
import s from "./ArticlesPage.module.scss";

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId?: string }>();
  const { data, error, isLoading } = useGetArticleByIdQuery(articleId);
  const location = useLocation();

  return (
    <>
      {isLoading && <Loader />}
      {(error && <h2>Something is wrong!</h2>) ||
        (data && (
          <Box>
            <CardMedia
              component="img"
              height="245"
              image={data.imageUrl}
              alt={data.title}
              className={s.img}
            />
            <div className={s.container}>
              <h1 className={s.title}>{data.title}</h1>
              <p className={s.summary}>{data.summary}</p>
            </div>
            <p className={s.link}>
              <Link to={location.state.from}>← back to Articles</Link>
            </p>
          </Box>
        ))}
    </>
  );
};

export default ArticlePage;
