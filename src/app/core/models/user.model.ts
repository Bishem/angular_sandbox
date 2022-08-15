import { Role } from './role.model';

export interface User {
  email: string;
  token: string;
  roles: Role[];
}

