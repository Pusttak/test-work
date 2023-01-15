import { useState, useEffect } from "react";

import { useGetAllArticlesQuery } from "../redux/articles-slice";
import { useAppSelector } from "../hooks";
import { articlesFilter, articlesSort } from "../utils";
import { IArticleProps } from "../interfaces";

export const useFilteredArticles = () => {
  const query = useAppSelector((state) => state.query);
  const { data, error, isLoading } = useGetAllArticlesQuery(query);
  const [filteredData, setFilteredData] = useState<Array<IArticleProps> | null>(
    null
  );

  useEffect(() => {
    if (data) {
      const filteredArticles = data.filter((article: IArticleProps) =>
        articlesFilter(article, query)
      );
      const sortedArticles = articlesSort(filteredArticles, query);
      setFilteredData(sortedArticles);
    }
  }, [data, query]);

  return { filteredData, error, isLoading };
};
