import { ReactNode } from 'react';
import { Permissions } from 'slate-interfaces';

export interface AdminLayoutProps {
  children: ReactNode;
  permission: keyof Permissions;
}
