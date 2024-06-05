import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly notMobileMessage = 'Para una mejor experiencia, por favor, ingresá desde un dispositivo móvil.';
  isMobile = false;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.isMobile = this.utilsService.isMobile();
  }

  closeAlert() {
    this.isMobile = true;
  }
}
