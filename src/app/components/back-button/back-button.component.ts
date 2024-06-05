import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Input()
  paddingBottom = '0';
  @Input()
  paddingTop = '0';
  @Output()
  event = new EventEmitter();
  click() {
    this.event.emit();
  }
}
