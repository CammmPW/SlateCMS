import { BusinessJob } from 'slate-rp-interfaces';

export interface ViewJobState {
  job?: BusinessJob;
  showSpinner: boolean;
  application: string;
}

export const defaultViewJobState: ViewJobState = {
  application: '',
  job: undefined,
  showSpinner: true,
}