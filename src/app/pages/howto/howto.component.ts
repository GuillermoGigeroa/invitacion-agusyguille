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

  googleMaps = true;
  currentAddress = this.ceremonyAddress;

  constructor(private navigationService: NavigationService) {}

  back() {
    this.navigationService.navigateTo(Pages.COUNTDOWN);
  }

  next() {
    // this.navigationService.navigateTo(Pages.COUNTDOWN);
  }

  toggleMap(address: string) {
    this.currentAddress = address;
    this.googleMaps = !this.googleMaps;
  }

  closeMap() {
    this.googleMaps = false;
  }

  //Funcionalidad para comportamiento en swipe de pantalla

  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  touchEndY = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
    this.touchStartY = event.changedTouches[0].screenY;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.touchEndY = event.changedTouches[0].screenY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY + 15 - this.touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        this.onSwipeRight();
      } else {
        this.onSwipeLeft();
      }
    } else {
      if (deltaY > 0) {
        this.onSwipeDown();
      } else {
        this.onSwipeUp();
      }
    }
  }

  onSwipeRight(): void {
    // console.log('Swiped right');
  }

  onSwipeLeft(): void {
    // console.log('Swiped left');
  }

  onSwipeUp(): void {
    // console.log('Swiped up');
  }
  
  onSwipeDown(): void {
    // console.log('Swiped down');
    this.back();
  }
}
