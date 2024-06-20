import { Component, HostListener } from '@angular/core';
import { Pages } from 'src/app/shared/model/pages.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss']
})
export class HowtoComponent {
  readonly ceremonyAddress = 'Saravi 2494, La Lonja, Pilar, Argentina';
  readonly partyAddress = 'El Benteveo 3357, La Lonja, Pilar, Argentina';

  googleMaps = false;
  currentAddress?: string;

  constructor(private navigationService: NavigationService) {}

  back() {
    this.navigationService.navigateTo(Pages.COUNTDOWN);
  }

  next() {
    this.navigationService.navigateTo(Pages.CONFIRMATION);
  }

  toggleMap(address: string) {
    this.currentAddress = address;
    this.googleMaps = !this.googleMaps;
  }

  closeMap() {
    this.googleMaps = false;
  }

  openInApp() {
    window.open(`google.navigation:q=${this.currentAddress}&mode=d` , '_system');
  }
}
