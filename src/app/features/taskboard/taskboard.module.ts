import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { TaskboardRoutingModule } from './taskboard-routing.module';
import { TaskboardComponent } from './pages/taskboard/taskboard.component';


@NgModule({
  declarations: [
    TaskboardComponent
  ],
  imports: [
    SharedModule,
    TaskboardRoutingModule
  ],
  exports: [
    TaskboardComponent
  ]
})
export class TaskboardModule { }
