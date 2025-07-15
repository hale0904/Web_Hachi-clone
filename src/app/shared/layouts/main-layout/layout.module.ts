import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LayoutMainComponent } from "./main-layout.component";

@NgModule ({
    declarations: [LayoutMainComponent, HeaderComponent, SidebarComponent, FooterComponent],
    imports: [CommonModule, RouterModule],
    exports: [LayoutMainComponent]
})

export class LayoutMainModule {}