import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: add guards
const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: 'taskboard'},
  {path: 'taskboard', loadChildren: () => import('@features/taskboard').then(loader => loader.TaskboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
