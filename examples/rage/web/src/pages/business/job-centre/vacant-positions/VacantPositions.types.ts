import { BusinessPosition } from 'slate-rp-interfaces';

export interface VacantPositionsState {
  positions: BusinessPosition[];
  showSpinner: boolean;
}

export const defaultVacantPositionState: VacantPositionsState = {
  positions: [],
  showSpinner: true,
};
