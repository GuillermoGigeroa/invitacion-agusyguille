import { Component, HostListener } from '@angular/core';
import { Pages } from 'src/app/shared/model/pages.enum';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private navigationService: NavigationService,
  ) {}

  next() {
    this.navigationService.navigateTo(Pages.COUNTDOWN);
  }
}
