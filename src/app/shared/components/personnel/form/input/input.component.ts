import { Component, Input } from '@angular/core';
import { ControlContainer, FormControl, FormControlDirective, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class InputComponent {
  @Input() label! : string;
  @Input() controlName!: string;

  constructor (private container: ControlContainer) {}

  get control(): FormControl {
    return this.container.control!.get(this.controlName) as FormControl;
  }
}
