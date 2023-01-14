import { Link, useParams, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import { useGetArticleByIdQuery } from "../../redux/articles-slice";
import {
  ArticleContainer,
  Title,
  Summary,
  GoBackLink,
} from "./ArticlePage.styled";
import Loader from "../../components/Loader";

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
              sx={{ position: "absolute", top: 0 }}
            />
            <ArticleContainer>
              <Title>{data.title}</Title>
              <Summary>{data.summary}</Summary>
            </ArticleContainer>
            <GoBackLink>
              <Link to={location.state.from}>← back to Articles</Link>
            </GoBackLink>
          </Box>
        ))}
    </>
  );
};

export default ArticlePage;
