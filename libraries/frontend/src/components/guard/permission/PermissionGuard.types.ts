import { Children } from 'components';
import { Permissions } from 'slate-interfaces';

export interface PermissionGuardProps {
  children: Children;
  permission: keyof Permissions;
}
