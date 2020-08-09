import { Article } from 'slate-interfaces';

export interface ArticleListState {
  articles: Article[];
  showSpinner: boolean;
}

export const defaultArticleListState: ArticleListState = {
  articles: [],
  showSpinner: true,
};
