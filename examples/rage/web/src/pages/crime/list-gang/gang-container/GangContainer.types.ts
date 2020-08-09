import { Gang } from 'slate-rp-interfaces';

export interface GangContainerState {
  gangs: Gang[];
  showSpinner: boolean;
}

export const defaultGangContainerState: GangContainerState = {
  gangs: [],
  showSpinner: true,
};
