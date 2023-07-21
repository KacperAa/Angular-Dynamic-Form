import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormElComponent } from './Dynamic-form/dynamic-form-el/dynamic-form-el.component';
import { DynamicFormComponent } from './Dynamic-form/dynamic-form/dynamic-form.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { PrimaryBtnComponent } from './UI/primary-btn/primary-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DynamicFormElComponent,
    DynamicFormComponent,
    SummaryComponent,
    PrimaryBtnComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
