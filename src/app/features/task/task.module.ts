import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { BoardComponent, DetailComponent } from './pages';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [BoardComponent, DetailComponent],
  imports: [SharedModule, TaskRoutingModule],
})
export class TaskModule {}
