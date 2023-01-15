import { stringNormalize } from "../utils";
import { IArticleProps } from "../interfaces";

export const articlesFilter = (
  article: IArticleProps,
  filter: string
): boolean => {
  const normalizedString = stringNormalize(filter);
  const reg = new RegExp(normalizedString, "gi");

  return reg.test(article.title) || reg.test(article.summary);
};
