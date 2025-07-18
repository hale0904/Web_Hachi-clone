// Import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import file
import { LayoutMainComponent } from './shared/layouts/main-layout/main-layout.component';
import { ProfileComponent } from './pages/p-personnel/profile/profile.component';

const routes: Routes = [
  {
    path: 'home',
    component: LayoutMainComponent,
    title: 'HACHI',
    children: [
      { path: 'personnel-profile', component: ProfileComponent}
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
