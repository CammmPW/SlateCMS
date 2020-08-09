import { Article } from 'slate-rp-interfaces';

export interface ViewArticleState {
  article?: Article;
  showSpinner: boolean;
}

export const defaultViewArticleState: ViewArticleState = {
  article: undefined,
  showSpinner: true,
};
