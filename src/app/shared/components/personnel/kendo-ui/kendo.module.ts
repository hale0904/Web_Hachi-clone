import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KendoDropdownComponent } from './dropdown.component';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';

@NgModule({
  declarations: [KendoDropdownComponent],
  imports: [
    CommonModule,
    DropDownsModule,
    LabelModule
  ],
  exports: [KendoDropdownComponent]
})
export class KendoDropdownModule {}
