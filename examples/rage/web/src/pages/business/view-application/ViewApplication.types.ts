import { BusinessJobApplication } from 'slate-rp-interfaces';

export interface ViewApplicationState {
  application?: BusinessJobApplication;
  showSpinner: boolean;
}

export const defaultViewApplicationState: ViewApplicationState = {
  application: undefined,
  showSpinner: true,
};
