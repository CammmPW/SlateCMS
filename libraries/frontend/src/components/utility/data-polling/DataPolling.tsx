import { useContext, useEffect } from 'react';
import { configService, sessionService } from 'services';
import { Config, Health, User } from 'slate-interfaces';
import { ConfigContext, HealthContext, SessionContext } from 'context';

const TWENTY_SECONDS_IN_MS = 20000;
const FIVE_MINUTE_IN_MS = 300000000;

export function DataPolling() {
  const configContext = useContext(ConfigContext);
  const healthContext = useContext(HealthContext);
  const sessionContext = useContext(SessionContext);

  useEffect(() => {
    async function fetchHealth(): Promise<void> {
      const health: Health = await configService.getHealth();
      healthContext.setStore!(health);
    }

    async function fetchSession(): Promise<void> {
      const user: User = await sessionService.getCurrentUser();
      sessionContext.setStore({
        ...sessionContext,
        user,
      });
    }

    async function fetchConfig(): Promise<void> {
      const config: Config = await configService.getConfig();
      configContext.setStore!(config);
    }

    fetchHealth();
    fetchConfig();
    fetchSession();

    setInterval(fetchHealth, TWENTY_SECONDS_IN_MS);
    setInterval(fetchConfig(), FIVE_MINUTE_IN_MS);
    setInterval(fetchSession, FIVE_MINUTE_IN_MS);
  }, [sessionContext]);

  return null;
}
