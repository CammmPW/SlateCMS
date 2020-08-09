import { Config, Health } from 'slate-interfaces';

export interface ConfigService {
  getConfig(): Promise<Config>;
  getHealth(): Promise<Health>;
}
