import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutMainModule } from "./main-layout/layout.module";

@NgModule ({
    declarations: [],
    imports: [CommonModule, RouterModule, LayoutMainModule],
    exports: []
})

export class LayoutModule {}