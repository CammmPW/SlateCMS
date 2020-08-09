import { Gang } from 'slate-rp-interfaces';

export interface ViewGangState {
  gang?: Gang;
  showSpinner: boolean;
}

export const defaultViewGangState: ViewGangState = {
  gang: undefined,
  showSpinner: true,
}