import { Photo } from 'slate-interfaces';

export interface PhotosState {
  photos: Photo[];
  showSpinner: boolean;
}

export const defaultPhotosState: PhotosState = {
  photos: [],
  showSpinner: true,
};
