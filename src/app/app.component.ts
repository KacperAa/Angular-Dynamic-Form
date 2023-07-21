import { Component, OnInit } from '@angular/core';
import { FormElService } from './services/form-el.service';
import { FormElBase } from './Classes/form-element-base';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormElDirection } from './Interfaces/form-el-direction.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public formElements$!: Observable<FormElDirection[]>;
  public form: FormGroup = new FormGroup({});

  constructor(private _formElService: FormElService) {
    this.formElements$ = this._formElService.getFormElements();
  }
  public ngOnInit(): void {}

  public getForm(form: FormGroup) {
    this.form = form;
  }

  public changeView() {
    /*   console.log('dupa'); */
  }
}
