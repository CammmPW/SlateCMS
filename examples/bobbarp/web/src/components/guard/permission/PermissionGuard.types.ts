import { Children } from 'slate-frontend';
import { Permissions } from 'slate-interfaces';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
}
