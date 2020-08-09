import { Gang } from 'slate-rp-interfaces';

export interface GangService {

  getAll(): Promise<Gang[]>;

  getTop(): Promise<Gang[]>;

  getByID(gangID: number): Promise<Gang>;

  search(name: string): Promise<Gang[]>;
}