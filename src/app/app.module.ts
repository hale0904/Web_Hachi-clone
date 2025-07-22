import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layouts/layout.module';
import { P_PersonnelModule } from './pages/p-personnel/p-personnel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




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
    BrowserAnimationsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
