import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/shared/model/pages.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly notMobileMessage = 'Para una mejor experiencia, por favor, ingresá desde un dispositivo móvil.';

  constructor(
    private utilsService: UtilsService,
    private navigationService: NavigationService,
  ) {}

  ngOnInit(): void {
    const isMobile = this.utilsService.isMobile();
    if (!isMobile) {
      console.log(`${this.notMobileMessage}`);
      alert(`${this.notMobileMessage}`);
    }
  }

  next() {
    this.navigationService.navigateTo(Pages.COUNTDOWN);
  }
}
