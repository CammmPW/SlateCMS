import './LoadingScreen.scss';
import React, { useContext, useState } from 'react';
import { ClientEvent, clientService, ConfigContext } from 'slate-frontend';

export function LoadingScreen() {
  const configContext = useContext(ConfigContext);
  const [progress, setProgress] = useState<number>(0);

  clientService.eventListener.on(ClientEvent.LOADING_PROGRESS, setProgress);

  if (progress === 100) {
    return null;
  }

  return (
    <div id="loader-wrapper">
      <div className="loader">
        <div id="loader">
          {configContext.loadingMessage}
          <div className="loading_bar">
            <div className="percent" id="loader_bar" style={{ width: `${progress}%` }} />
            {progress}%
          </div>
        </div>
        <div className="loader-section section-top" />
        <div className="loader-section section-bottom" />
      </div>
    </div>
  );
}
