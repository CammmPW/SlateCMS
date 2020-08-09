import React from 'react';
import { SessionContextProvider } from './session';
import { ContextProvidersProps, ConfigProvider, ThemeContextProvider, HealthProvider } from 'slate-frontend';

export function ContextProviders({ children }: ContextProvidersProps) {
  return (
    <>
      <ConfigProvider>
        <SessionContextProvider>
          <HealthProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </HealthProvider>
        </SessionContextProvider>
      </ConfigProvider>
    </>
  );
}
