import { Article } from 'slate-interfaces';

export interface RecentNewsState {
  articles: Article[];
  isLoading: boolean;
}

export const defaultRecentNewsState: RecentNewsState = {
  articles: [],
  isLoading: true,
};
