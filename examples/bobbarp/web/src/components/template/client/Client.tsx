import './Client.scss';
// @ts-ignore - Dependency doesn't have a good @types
import * as Flash from 'swfobject';
import { UserGuard } from 'components';
import React, { useContext } from 'react';
import { SessionContext } from 'app/context';
import { ClientActions } from './client-actions';
import { FlashDisabled } from './flash-disabled';
import { LoadingScreen } from './loading-screen';
import { ThemeContext} from 'slate-frontend';
import { ClientContainer } from './client-container';

export function Client() {
  const themeContext = useContext(ThemeContext);
  const sessionContext = useContext(SessionContext);
  const flashEnabled: boolean = Flash.getFlashPlayerVersion().major > 0;

  if (sessionContext.user?.online) {
    return null;
  }

  return (
    <UserGuard redirect={false}>
      <div className={`hotel-container ${themeContext.showClient ? 'visible' : 'not-visible'}`}>
        <ClientActions />
        {flashEnabled && (
          <>
            <LoadingScreen />
            <ClientContainer />
          </>
        )}
        {!flashEnabled && <FlashDisabled />}
      </div>
    </UserGuard>
  );
}
