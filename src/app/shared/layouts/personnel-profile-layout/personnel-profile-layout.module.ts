import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PersonnelProfileLayoutComponent } from "./personnel-profile-layout.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@NgModule ({
    declarations: [ PersonnelProfileLayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [PersonnelProfileLayoutComponent]
})

export class LayoutPersonnelProfileModule {}