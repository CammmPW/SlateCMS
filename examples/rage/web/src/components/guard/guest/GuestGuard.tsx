import { useContext } from 'react';
import { GuestGuardProps } from './';
import { redirect } from 'slate-frontend';
import { SessionContext, SessionTypes } from 'app/context';

export function GuestGuard({ children }: GuestGuardProps) {
  const sessionContext: SessionTypes = useContext(SessionContext);

  if (sessionContext.session) {
    redirect('home');
  }

  return children;
}
