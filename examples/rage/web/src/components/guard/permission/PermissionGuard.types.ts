import { Children } from 'slate-frontend';
import { Permissions } from 'slate-rp-interfaces';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
}
