import { User } from 'slate-interfaces';

export interface GamesCardState {
  users: User[];
  showSpinner: boolean;
}

export const defaultGamesCardState: GamesCardState = {
  users: [],
  showSpinner: true,
};
