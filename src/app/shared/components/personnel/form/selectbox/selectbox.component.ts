import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-select-field',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss']
})
export class SelectFieldComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() options: string[] = [];

  get control(): FormControl {
    const group = this.container.control;
    if (!group) throw new Error('Form group not found');
    return group.get(this.controlName) as FormControl;
  }

  constructor(private container: ControlContainer) {}
}
