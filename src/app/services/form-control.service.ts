import { Injectable } from '@angular/core';
import { FormElBase } from '../Classes/form-element-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  public toFormGroup(formElements: FormElBase<string>[]): FormGroup {
    const group: any = {};

    formElements.forEach((formElement: FormElBase<string>) => {
      group[formElement.key] = formElement.rules.required
        ? new FormControl(formElement.value || '', Validators.required)
        : new FormControl(formElement.value || '');

      if (formElement.rules.maxLength) {
        group[formElement.key].addValidators(
          Validators.maxLength(formElement.rules.maxLength)
        );

        if (formElement.rules.pattern) {
          group[formElement.key].addValidators(
            Validators.pattern(formElement.rules.pattern)
          );
        }
      }
    });

    return new FormGroup(group);
  }
}
