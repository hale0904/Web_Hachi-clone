import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NhanVien } from 'src/app/core/models/personnel/nhanVien.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label!: string;
  @Input() model!: any;
  @Input() property!: string;
}
