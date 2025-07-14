import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  items = [
    {year: '© 2020 ', company: '3P Solutions Ltd. Co.', link: ''}
  ]
}
