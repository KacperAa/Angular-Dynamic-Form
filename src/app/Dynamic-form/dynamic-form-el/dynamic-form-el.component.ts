import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormElBase } from 'src/app/Classes/form-element-base';

@Component({
  selector: 'app-dynamic-form-el',
  templateUrl: './dynamic-form-el.component.html',
  styleUrls: ['./dynamic-form-el.component.scss'],
})
export class DynamicFormElComponent {
  @Input() public formEl!: FormElBase<string>;
  @Input() public form!: FormGroup;
  public get isValid() {
    return this.form.controls[this.formEl.key].valid;
  }
}
