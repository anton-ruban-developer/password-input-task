import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthCheckerComponent } from './password-strength-checker/password-strength-checker.component';
import { PasswordStrengthService } from './services/password-strength.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthCheckerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
