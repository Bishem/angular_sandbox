import { User } from '@core/models';

export interface UserSecret extends User {
  password: string;
}
