import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LayoutComponent } from "./layout.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule ({
    declarations: [LayoutComponent, HeaderComponent, SidebarComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [LayoutComponent]
})

export class LayoutModule {}