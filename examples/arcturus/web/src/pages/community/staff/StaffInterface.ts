import { Rank } from 'slate-interfaces';

export interface StaffState {
  ranks: Rank[];
  showSpinner: boolean;
}

export const defaultStaffState: StaffState = {
  ranks: [],
  showSpinner: true,
};
