import { ReactNode } from 'react';
import { Business } from 'slate-rp-interfaces';

export interface BusinessRowProps {
  business: Business;
  children?: ReactNode;
}
