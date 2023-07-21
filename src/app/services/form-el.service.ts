import { Injectable } from '@angular/core';
import { InputEl, FormElBase } from '../Classes/form-element-base';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormElService {
  public getFormElements(): Observable<FormElBase<string>[]> {
    const formElements: FormElBase<string>[] = [
      new InputEl({
        key: 'cardHolderName',
        label: 'cardholder name',
        order: 1,
        type: 'text',
        placeholder: 'e.g Jane Applessed',
        rules: {
          required: true,
          maxLength: 20,
          pattern: '[A-Za-z]*',
        },
      }),

      new InputEl({
        key: 'cardNumber',
        label: 'card number',
        order: 2,
        type: 'text',
        placeholder: 'e.g 1234 5678 9123 0000',
        rules: {
          required: true,
          maxLength: 16,
          pattern: '[0-9]*',
        },
      }),

      new InputEl({
        key: 'expDate',
        label: 'exp. date',
        order: 3,
        type: 'text',
        placeholder: 'MM',
        rules: {
          required: true,
          maxLength: 2,
          pattern: '[0-9]*',
        },
      }),

      new InputEl({
        key: 'date',
        label: '(MM/YY)',
        order: 4,
        type: 'text',
        placeholder: 'YY',
        rules: {
          required: true,
          maxLength: 2,
          pattern: '[0-9]*',
        },
      }),

      new InputEl({
        key: 'cvc',
        label: 'cvc',
        order: 5,
        type: 'text',
        placeholder: 'e.g 123',
        rules: {
          required: true,
          maxLength: 3,
          pattern: '[0-9]*',
        },
      }),
    ];

    return of(formElements.sort((a, b) => a.order - b.order));
  }
}
