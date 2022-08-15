import { MaterialModule } from '@shared/modules';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * this module is a toolbox
 * it regroups all components and modules used accross different features
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
