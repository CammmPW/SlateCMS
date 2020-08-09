import { Business } from 'slate-rp-interfaces';

export interface PersonalBusinessesState {
  businesses: Business[];
  showSpinner: boolean;
}

export const defaultPersonalBusinessesState: PersonalBusinessesState = {
  businesses: [],
  showSpinner: true,
};
