import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile/profile.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { UtilsModule } from "src/app/shared/utils/utils.module";
import { PersonnelModule } from "src/app/shared/components/personnel/personnel.module";

@NgModule ({
    declarations: [ProfileComponent],
    imports: [CommonModule, RouterModule, PersonnelModule, FormsModule, UtilsModule],
    exports: [ProfileComponent]
})

export class P_PersonnelModule {}