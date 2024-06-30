import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PasswordStrengthService } from '../services/password-strength.service';

@Component({
  selector: 'app-password-strength-checker',
  templateUrl: './password-strength-checker.component.html',
  styleUrls: ['./password-strength-checker.component.scss'],
})
export class PasswordStrengthCheckerComponent implements OnChanges {
  @Input() password: string = '';
  getColor: string[] = ['gray', 'gray', 'gray'];
  strengthMessage: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['password']) {
      this.checkPasswordStrength();
    }
  }

  checkPasswordStrength() {
    const { colors, message } =
      this.passwordStrengthService.evaluatePasswordStrength(this.password);
    this.getColor = colors;
    this.strengthMessage = message;
  }
}
