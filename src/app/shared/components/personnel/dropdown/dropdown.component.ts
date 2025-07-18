import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() label!: string;
  @Input() model!: any;
  @Input() property!: string;
  @Input() options!: string [];
}
