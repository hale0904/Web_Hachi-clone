import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AvatarInfoComponent } from "./avatar-info/avatar-info.component";
import { AvatarNavComponent } from "./avatar-nav/avatar-nav.component";
import { InputComponent } from "./input/input.component";
import { DateComponent } from './date/date.component';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { KendoDropdownModule } from "./kendo-ui/kendo.module";

@NgModule ({
    declarations: [AvatarInfoComponent, AvatarNavComponent, InputComponent, DateComponent, BirthDateComponent ],
    imports: [CommonModule, RouterModule, FormsModule, DropDownsModule, KendoDropdownModule ],
    exports: [AvatarInfoComponent, AvatarNavComponent, InputComponent, DateComponent, BirthDateComponent, KendoDropdownModule   ]
})

export class PersonnelModule {}