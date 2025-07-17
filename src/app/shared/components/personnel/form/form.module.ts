import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from "./input/input.component";
import { SelectFieldComponent } from "./selectbox/selectbox.component";
import { DateComponent } from "./date/date.component";
import { FormComponent } from "./form.component";

@NgModule ({
    declarations: [InputComponent, SelectFieldComponent, DateComponent, FormComponent],
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [FormComponent]
})

export class FormModule {}