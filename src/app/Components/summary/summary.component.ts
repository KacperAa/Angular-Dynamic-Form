import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  @Output()
  public emitClick: EventEmitter<never> = new EventEmitter<never>();
}
