import { ReactNode } from 'react';
import { User } from 'slate-interfaces';

export interface UserModalProps {
  children: ReactNode;
  user: User;
}
