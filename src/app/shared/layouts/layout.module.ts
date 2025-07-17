import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonnelProfileLayoutComponent } from "./personnel-profile-layout/personnel-profile-layout.component";
import { LayoutMainModule } from "./main-layout/layout.module";
import { LayoutPersonnelProfileModule } from "./personnel-profile-layout/personnel-profile-layout.module";

@NgModule ({
    declarations: [],
    imports: [CommonModule, RouterModule, LayoutMainModule, LayoutPersonnelProfileModule],
    exports: []
})

export class LayoutModule {}