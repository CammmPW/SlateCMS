import { Group } from 'slate-interfaces';

export interface GroupService {
  getAll(): Promise<Group[]>;

  getMostPopular(): Promise<Group[]>;

  getByID(groupID: number): Promise<Group>;
}
