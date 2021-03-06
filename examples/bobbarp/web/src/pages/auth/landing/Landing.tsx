import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { setLanding } from 'slate-frontend';
import { SessionContext, SessionTypes } from 'app/context';

setLanding(<Landing />);

export function Landing() {
  const sessionContext = useContext<SessionTypes>(SessionContext);

  return sessionContext.user === undefined ? <Redirect to="/login" /> : <Redirect to="/home" />;
}
