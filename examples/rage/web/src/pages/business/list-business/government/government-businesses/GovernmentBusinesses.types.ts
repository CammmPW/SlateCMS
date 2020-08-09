import { Business } from 'slate-rp-interfaces';

export interface GovernmentBusinessesState {
  businesses: Business[];
  showSpinner: boolean;
}

export const defaultGovernmentBusinessesState: GovernmentBusinessesState = {
  businesses: [],
  showSpinner: true,
};
