import { setURL } from 'slate-frontend';
import { ThemeContext } from 'app/context';
import React, { useContext, useEffect } from 'react';

setURL('play', <PlayPage />);

export function PlayPage() {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    themeContext.toggleClient!(true);
  });

  return null;
}
