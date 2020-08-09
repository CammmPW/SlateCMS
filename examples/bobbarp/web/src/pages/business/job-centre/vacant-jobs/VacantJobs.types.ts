import { BusinessJob } from 'slate-rp-interfaces';

export interface VacantJobsState {
  jobs: BusinessJob[];
  showSpinner: boolean;
}

export const defaultVacantJobsState: VacantJobsState = {
  jobs: [],
  showSpinner: true,
}