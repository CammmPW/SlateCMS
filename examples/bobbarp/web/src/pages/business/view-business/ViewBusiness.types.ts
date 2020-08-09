import { Business } from 'slate-rp-interfaces';

export interface ViewBusinessState {
  business?: Business;
  showSpinner: boolean;
}

export const defaultViewBusinessState: ViewBusinessState = {
  business: undefined,
  showSpinner: true,
}