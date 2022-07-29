import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  imports: [
    CoreRoutingModule,
    HttpClientModule
  ],
  exports: [
    CoreRoutingModule
  ],
})
export class CoreModule { }
