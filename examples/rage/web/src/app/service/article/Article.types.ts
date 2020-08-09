import { Article } from 'slate-rp-interfaces';

export interface ArticleTypes {
  getAll(): Promise<Article[]>;

  getByID(articleID: string): Promise<Article>;
}
