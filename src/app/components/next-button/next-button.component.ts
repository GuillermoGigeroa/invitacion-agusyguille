import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-next-button',
  templateUrl: './next-button.component.html',
  styleUrls: ['./next-button.component.scss']
})
export class NextButtonComponent {
  @Input()
  paddingBottom = '0';
  @Input()
  paddingTop = '0';
  @Input()
  animated = false;
  @Output()
  event = new EventEmitter();
  click() {
    this.event.emit();
  }
}
