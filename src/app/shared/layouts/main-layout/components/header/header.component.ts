import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  items = [
    {link: 'config', title: 'cấu hình', straight: ''},
    {link: 'config', title: 'mua hàng', straight: ''},
    {link: 'config', title: 'kho hàng', straight: ''},
    {link: 'config', title: 'điều phối', straight: ''},
    {link: 'config', title: 'marketing', straight: ''},
    {link: 'config', title: 'e-commerce', straight: ''},
    {link: 'config', title: 'kinh doanh', straight: ''},
    {link: 'config', title: 'nhân sự', straight: ''},
    {link: 'config', title: 'báo cáo', straight: ''}
  ]

  icons = [
    { nameIcon: 'fa-magnifying-glass', descrip: 'icon-search' },
    { nameIcon: 'fa-bell', descrip: 'icon-search' },
    { nameIcon: 'fa-circle-user', descrip: 'icon-search' }
  ] 
}