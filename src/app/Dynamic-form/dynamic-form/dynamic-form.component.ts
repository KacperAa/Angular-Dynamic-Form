import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElBase } from 'src/app/Classes/form-element-base';
import { FormElDirection } from 'src/app/Interfaces/form-el-direction.interface';
import { FormControlService } from 'src/app/services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input() public formElDirection: FormElDirection[] | null = [];
  public form!: FormGroup;
  @Output()
  public emitForm = new EventEmitter<FormGroup>();
  @Output()
  public clickSumbit: EventEmitter<never> = new EventEmitter<never>();
  get formControls(): FormElBase<string>[] | undefined {
    return this.formElDirection?.flatMap(
      (formEl: FormElDirection) => formEl.formElements
    );
  }

  constructor(private _formControlService: FormControlService) {}

  public ngOnInit() {
    this.form = this._formControlService.toFormGroup(
      this.formControls as FormElBase<string>[]
    );
    this.emitForm.emit(this.form);
  }

  public onSubmit(): void {
    this.clickSumbit.emit();
  }
}
