import { Gang } from 'slate-rp-interfaces';

export interface GangsState {
  gangs: Gang[];
  showSpinner: boolean;
}

export const defaultGangsState: GangsState = {
  gangs: [],
  showSpinner: true,
}