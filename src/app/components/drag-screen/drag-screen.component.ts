import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-drag-screen',
  templateUrl: './drag-screen.component.html',
  styleUrls: ['./drag-screen.component.css']
})
export class DragScreenComponent {
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
    const deltaY = this.touchEndY - this.touchStartY;

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
    console.log('Swiped right');
  }

  onSwipeLeft(): void {
    console.log('Swiped left');
  }

  onSwipeUp(): void {
    console.log('Swiped up');
  }

  onSwipeDown(): void {
    console.log('Swiped down');
  }
}
