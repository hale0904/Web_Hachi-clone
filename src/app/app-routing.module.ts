// Import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import file
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    // Đường dẫn trang chủ
    path: 'home',
    component: LayoutComponent,
    title: 'HACHI',
    children: [

    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
