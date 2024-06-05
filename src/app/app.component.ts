import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly notMobileMessage = 'Para una mejor experiencia, por favor, ingresá desde un dispositivo móvil.';
  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    const isMobile = this.utilsService.isMobile();
    if (!isMobile) {
      console.log(`${this.notMobileMessage}`);
      alert(`${this.notMobileMessage}`);
    }
  }
}
