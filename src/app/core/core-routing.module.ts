import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODO: add guards
// TODO: check how auth guard actually works, not understanding its implemnentation as is
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'task' },
  {
    path: 'account',
    loadChildren: () =>
      import('@features/account').then((loader) => loader.AccountModule),
  },
  {
    path: 'task',
    loadChildren: () =>
      import('@features/task').then((loader) => loader.TaskModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
