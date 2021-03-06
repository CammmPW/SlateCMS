import { UserProfile } from 'slate-rp-interfaces';

export interface UserProfileState {
  profile?: UserProfile;
  isLoading: boolean;
}

export const defaultUserProfileState: UserProfileState = {
  profile: undefined,
  isLoading: true,
};

export interface UserProfileWidgetProps {
  profile?: UserProfile;
}
