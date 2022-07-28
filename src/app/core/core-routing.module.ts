import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskboardModule } from '../features/taskboard/taskboard.module';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: 'taskboard'},
  {path: 'taskboard', loadChildren: () => TaskboardModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
