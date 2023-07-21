import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-primary-btn',
  templateUrl: './primary-btn.component.html',
  styleUrls: ['./primary-btn.component.scss'],
})
export class PrimaryBtnComponent {
  @Input({ required: true })
  public btnText!: string;
  @Input({ required: false })
  public disabled!: boolean;
  @Output()
  public emitClick: EventEmitter<never> = new EventEmitter<never>();
}
