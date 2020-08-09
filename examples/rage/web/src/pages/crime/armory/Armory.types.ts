import { Weapon } from 'slate-rp-interfaces';

export interface ArmoryState {
  weapons: Weapon[];
  showSpinner: boolean;
}

export const defaultArmoryState: ArmoryState = {
  weapons: [],
  showSpinner: true,
};
