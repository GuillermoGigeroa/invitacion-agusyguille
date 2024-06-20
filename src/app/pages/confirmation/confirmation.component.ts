import { Component, HostListener } from '@angular/core';
import { Pages } from 'src/app/shared/model/pages.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  constructor(private navigationService: NavigationService) {}

  back() {
    this.navigationService.navigateTo(Pages.HOWTO);
  }

  next() {
    // this.navigationService.navigateTo(Pages.CONFIRMATION);
  }
}
