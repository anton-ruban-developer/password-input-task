import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  evaluatePasswordStrength(password: string) {
    const lengthCriteria = password.length >= 8;
    const hasLetters = /[a-zA-Zа-яА-ЯёЁіІїЇєЄ]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isEmpty = password.length === 0;
    const isStrong = lengthCriteria && hasLetters && hasDigits && hasSymbols;
    const isMedium =
      lengthCriteria &&
      ((hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols));
    const isEasy = lengthCriteria && (hasLetters || hasDigits || hasSymbols);

    if (isEmpty) {
      return { colors: ['gray', 'gray', 'gray'], message: '' };
    } else if (!lengthCriteria) {
      return {
        colors: ['tomato', 'tomato', 'tomato'],
        message: 'Password must be at least 8 characters long',
      };
    } else if (isStrong) {
      return {
        colors: ['SeaGreen', 'SeaGreen', 'SeaGreen'],
        message: 'Secure password',
      };
    } else if (isMedium) {
      if (hasLetters && hasDigits) {
        return {
          colors: ['gold', 'gold', 'gray'],
          message: 'Add symbols to make it stronger',
        };
      } else if (hasLetters && hasSymbols) {
        return {
          colors: ['gold', 'gold', 'gray'],
          message: 'Add digits to make it stronger',
        };
      } else if (hasDigits && hasSymbols) {
        return {
          colors: ['gold', 'gold', 'gray'],
          message: 'Add letters to make it stronger',
        };
      }
    } else if (isEasy) {
      if (hasLetters) {
        return {
          colors: ['tomato', 'gray', 'gray'],
          message: 'Add digits and symbols to make it stronger',
        };
      } else if (hasDigits) {
        return {
          colors: ['tomato', 'gray', 'gray'],
          message: 'Add letters and symbols to make it stronger',
        };
      } else if (hasSymbols) {
        return {
          colors: ['tomato', 'gray', 'gray'],
          message: 'Add letters and digits to make it stronger',
        };
      }
    }
    return { colors: ['gray', 'gray', 'gray'], message: '' };
  }
}
