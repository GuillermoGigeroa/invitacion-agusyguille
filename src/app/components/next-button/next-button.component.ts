import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent {
  @Output()
  event = new EventEmitter();
  click() {
    this.event.emit();
  }
}
