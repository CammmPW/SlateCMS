import React, { useContext, useEffect } from 'react';
import { setURL, ThemeContext } from 'slate-frontend';

setURL('play', <PlayPage />);

export function PlayPage() {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    themeContext.toggleClient!(true);
  });

  return null;
}
