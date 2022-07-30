import { NgModule } from '@angular/core';
import { SharedModule } from '@root/shared';
import { ChildComponent, CousinComponent, ParentComponent } from './components';
import { TaskboardComponent } from './pages';
import { TaskboardRoutingModule } from './taskboard-routing.module';


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
