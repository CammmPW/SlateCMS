import { Config, defaultConfig } from 'slate-interfaces';

export interface ConfigTypes extends Config {
  setStore?: (changes: Partial<ConfigTypes>) => void;
}

export const defaultConfigInterface: ConfigTypes = defaultConfig;
