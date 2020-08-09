import { Article } from 'slate-rp-interfaces';

export interface LatestNewsState {
  articles: Article[];
  showSpinner: boolean;
}

export const defaultLatestNewsState: LatestNewsState = {
  articles: [],
  showSpinner: true,
};
