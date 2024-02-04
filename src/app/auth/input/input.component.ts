import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  // @Input() type: string = '';
  // @Input() placeholder: string = '';
  // @Input() id: string = '';
  // @Input() UI: string = '';
  // @Input() formControlName: string = '';
}
