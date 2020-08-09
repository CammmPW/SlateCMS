import { Gang } from 'slate-rp-interfaces';

export interface GangService {
  getAll(): Promise<Gang[]>;

  getMostKills(): Promise<Gang[]>;

  getMostDeaths(): Promise<Gang[]>;

  getByID(gangID: number): Promise<Gang>;

  search(name: string): Promise<Gang[]>;
}
