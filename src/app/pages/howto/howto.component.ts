import { Component } from '@angular/core';
import { Pages } from 'src/app/shared/model/pages.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss']
})
export class HowtoComponent {
  constructor(private navigationService: NavigationService) {}

  back() {
    this.navigationService.navigateTo(Pages.COUNTDOWN);
  }
}
