import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  items = [
    {imgLogo: 'assets/images/logo/logo.png', descrip: 'Logo HACHI HACHI', dropdown: 'fa-caret-down'}
  ]

  navs = [
    {icon: 'fa-list-check', title: 'Đánh giá nhân sự', dropdown: 'fa-caret-down'},
    {icon: 'fa-list-check', title: 'Quản lý sản phẩm', dropdown: 'fa-caret-down'}
  ]
}
