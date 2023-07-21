import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElBase } from 'src/app/Classes/form-element-base';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() public formElements: FormElBase<string>[] | null = [];
  public form!: FormGroup;
  @Output()
  public emitForm = new EventEmitter<FormGroup>();

  constructor(private _formControlService: FormControlService) {}

  public ngOnInit() {
    this.form = this._formControlService.toFormGroup(
      this.formElements as FormElBase<string>[]
    );
    this.emitForm.emit(this.form);
  }

  public onSubmit() {}
}
