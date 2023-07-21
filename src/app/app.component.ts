import { ApplicationRef, Component } from '@angular/core';
import { FormElService } from './services/form-el.service';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormElDirection } from './Interfaces/form-el-direction.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public formElements$!: Observable<FormElDirection[]>;
  public form: FormGroup = new FormGroup({});
  public isChangedView: boolean = false;

  constructor(
    private _formElService: FormElService,
    private _appRef: ApplicationRef
  ) {
    this.formElements$ = this._formElService.getFormElements();
  }

  public getForm(form: FormGroup) {
    this.form = form;
  }

  public changeView(): void {
    if (this.form.valid) {
      this.isChangedView = !this.isChangedView;
    }
  }

  public resetApplication(): void {
    this._appRef.tick();
    const currentUrl =
      this._appRef.components[0].location.nativeElement.baseURI;
    window.location.href = currentUrl;
  }
}
