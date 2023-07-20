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
      group[formElement.key] = formElement.required
        ? new FormControl(formElement.value || '', Validators.required)
        : new FormControl(formElement.value || '');
    });
    return new FormGroup(group);
  }
}
