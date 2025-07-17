import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layouts/layout.module';
import { P_PersonnelModule } from './pages/p-personnel/p-personnel.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule, 
    AppRoutingModule,

    // Các module con
    LayoutModule,
    P_PersonnelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
