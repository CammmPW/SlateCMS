import { Photo } from 'slate-interfaces';

export interface PhotoTypes {
  getAll(): Promise<Photo[]>;

  getByID(photoID: string): Promise<Photo>;
}
