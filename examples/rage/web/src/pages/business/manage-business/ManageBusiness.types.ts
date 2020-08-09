import { Business } from 'slate-rp-interfaces';

export interface ManageBusinessState {
  business?: Business;
  showSpinner: boolean;
}

export const defaultManageBusinessState: ManageBusinessState = {
  business: undefined,
  showSpinner: true,
};
