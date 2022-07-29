import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { TaskboardComponent } from './pages/taskboard';
import { TaskboardRoutingModule } from './taskboard-routing.module';
import { ParentComponent } from './components/parent';
import { ChildComponent } from './components/child';
import { CousinComponent } from './components/cousin';


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
