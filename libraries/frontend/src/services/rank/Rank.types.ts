import { Rank } from 'slate-interfaces';

export interface RankTypes {
  getAll(): Promise<Rank[]>;

  getStaff(): Promise<Rank[]>;

  getByID(rankID: string): Promise<Rank>;
}
