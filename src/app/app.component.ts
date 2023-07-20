import { Component } from '@angular/core';
import { FormElService } from './services/form-el.service';
import { FormElBase } from './Classes/form-element-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-forms';
  public formElements$!: Observable<FormElBase<any>[]>;

  constructor(private _formElService: FormElService) {
    this.formElements$ = this._formElService.getFormElements();
  }
}
