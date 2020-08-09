import {SessionTypes} from './';
import {createContext} from 'react';
import {exampleUserSession, UserSession} from 'slate-rp-interfaces';

export const SessionContext = createContext<SessionTypes>({
  setStore: () => {},
  login: async (username: string, password: string) => exampleUserSession,
  logout: () => {},
  forceStart: (session: UserSession) => { },
  refresh: async () => { },
});
