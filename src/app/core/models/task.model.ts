import { User } from '@core/models';
import { Status } from './status.model';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
  user: User;
}
