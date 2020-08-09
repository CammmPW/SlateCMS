import { User } from 'slate-rp-interfaces';

export interface LeaderBoardState {
  users: User[];
  showSpinner: boolean;
}

export const defaultLeaderboardState: LeaderBoardState = {
  users: [],
  showSpinner: true,
};
