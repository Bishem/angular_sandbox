import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { NavigationComponent } from './components';


@NgModule({
  imports: [
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [
    CoreRoutingModule,
    NavigationComponent
  ],
  declarations: [
    NavigationComponent
  ],
})
export class CoreModule { }
