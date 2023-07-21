import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormElBase } from 'src/app/Classes/form-element-base';
import { ErrorMessageService } from 'src/app/services/error-message.service';

@Component({
  selector: 'app-dynamic-form-el',
  templateUrl: './dynamic-form-el.component.html',
  styleUrls: ['./dynamic-form-el.component.scss'],
})
export class DynamicFormElComponent {
  @Input({ required: true }) public formEl!: FormElBase<string>;
  @Input({ required: true }) public form!: FormGroup;
  public get formControl(): FormControl {
    return this.form.controls[this.formEl.key] as FormControl;
  }
  public get isValid() {
    return this.formControl.valid;
  }

  constructor(private _errorService: ErrorMessageService) {}

  public getErrorMessages(): string {
    return this._errorService.getErrorMessage(this.formControl);
  }
}
