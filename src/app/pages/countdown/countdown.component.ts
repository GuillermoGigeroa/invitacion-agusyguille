import { Component } from '@angular/core';
import { Pages } from 'src/app/shared/model/pages.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {

  constructor(
    private navigationService: NavigationService,
  ) {}

  back() {
    this.navigationService.navigateTo(Pages.HOME);
  }
}
