import { Update } from 'slate-rp-interfaces';

export interface UpdateService {
  getAll(): Promise<Update[]>;

  getOneByID(updateID: number): Promise<Update>;
}
