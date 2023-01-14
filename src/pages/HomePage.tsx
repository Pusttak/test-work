import Container from "../components/Container";
import SearchBar from "../components/SearchBar/SearchBar";
import ArticleCardsList from "../components/ArticleCardsList";

const HomePage = () => {
  return (
    <Container>
      <SearchBar />
      <ArticleCardsList />
    </Container>
  );
};

export default HomePage;
