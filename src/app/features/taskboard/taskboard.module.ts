import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TaskboardComponent } from './pages/taskboard/taskboard.component';
import { TaskboardRoutingModule } from './taskboard-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { CousinComponent } from './components/cousin/cousin.component';


@NgModule({
  declarations: [
    TaskboardComponent,
    ParentComponent,
    ChildComponent,
    CousinComponent
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
