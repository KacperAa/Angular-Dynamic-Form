import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElBase } from 'src/app/Classes/form-element-base';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() formElements: FormElBase<string>[] | null = [];
  public form!: FormGroup;

  constructor(private _formControlService: FormControlService) {}

  public ngOnInit() {
    this.form = this._formControlService.toFormGroup(
      this.formElements as FormElBase<string>[]
    );
  }

  public onSubmit() {
    console.log('test');
  }
}
