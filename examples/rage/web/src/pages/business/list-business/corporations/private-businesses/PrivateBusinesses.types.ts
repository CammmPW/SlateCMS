import { Business } from 'slate-rp-interfaces';

export interface PrivateBusinessesState {
  businesses: Business[];
  showSpinner: boolean;
}

export const defaultPrivateBusinessesState: PrivateBusinessesState = {
  businesses: [],
  showSpinner: true,
};
