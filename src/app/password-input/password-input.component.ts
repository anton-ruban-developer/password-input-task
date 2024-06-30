import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent {
  password: string = '';

  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  onPasswordChange(password: string) {
    this.password = password;
    this.ngModelChange.emit(this.password);
  }
}
