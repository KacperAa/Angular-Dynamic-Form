import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ErrorMessageService {
  public getErrorMessage(formControl: FormControl): string {
    if (formControl.hasError('required')) {
      return this._setRequiredErr();
    }
    if (formControl.hasError('maxlength')) {
      return this._setMaxLengthErr(formControl);
    }

    if (formControl.hasError('pattern')) {
      return this._setPatternErr(formControl);
    }

    return '';
  }

  private _setRequiredErr(): string {
    return 'Field is required';
  }

  private _setMaxLengthErr(formControl: FormControl): string {
    const maxLength: number = formControl.getError('maxlength').requiredLength;
    return `Maximum character length is ${maxLength}`;
  }

  private _setPatternErr(formControl: FormControl): string {
    const patternErr = formControl.getError('pattern');
    if (patternErr.requiredPattern === '^[0-9]*$') {
      return 'Only numbers!';
    } else if (patternErr.requiredPattern === '^[A-Za-z]*$') {
      return 'Only letters!';
    }
    return '';
  }
}
