import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardsInitialValue } from 'src/app/Interfaces/cards-initial-values';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input({ required: true })
  public form!: FormGroup;

  public cardsInitialValue: CardsInitialValue = {
    cardholderName: 'Jane Applessed',
    cardNumber: '0000 0000 0000 0000',
    expDate: '00',
    mmyy: '00',
    cvc: '000',
  };
}
