import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AvatarInfoComponent } from "./avatar-info/avatar-info.component";
import { AvatarNavComponent } from "./avatar-nav/avatar-nav.component";
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputComponent } from "./input/input.component";
import { DateComponent } from './date/date.component';
import { BirthDateComponent } from './birth-date/birth-date.component';
import { SelectBoxComponent } from "./select-box/select-box.component";


@NgModule ({
    declarations: [AvatarInfoComponent, AvatarNavComponent, DropdownComponent, InputComponent, DropdownComponent, DateComponent, BirthDateComponent, SelectBoxComponent],
    imports: [CommonModule, RouterModule, FormsModule ],
    exports: [AvatarInfoComponent, AvatarNavComponent, InputComponent, DropdownComponent, DateComponent, BirthDateComponent, SelectBoxComponent]
})

export class PersonnelModule {}