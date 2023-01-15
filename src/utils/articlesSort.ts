import { stringNormalize } from "../utils";
import { IArticleProps } from "../interfaces";

export const articlesSort = (
  articles: Array<IArticleProps>,
  filter: string
): Array<IArticleProps> => {
  const normalizedString = stringNormalize(filter);
  const reg = new RegExp(normalizedString, "gi");

  return articles.sort((article) => (reg.test(article.title) ? -1 : 1));
};
