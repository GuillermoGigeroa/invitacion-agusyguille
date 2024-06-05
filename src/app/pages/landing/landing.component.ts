import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  readonly notMobileMessage = 'Para una mejor experiencia, por favor, ingresá desde un dispositivo móvil.';
  readonly audio: HTMLAudioElement = new Audio('assets/sounds/love-of-my-life.mp3');
  music = false;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    const isMobile = this.utilsService.isMobile();
    if (!isMobile) {
      console.log(`${this.notMobileMessage}`);
      alert(`${this.notMobileMessage}`);
    }
  }

  playMusic() {
    if (!this.music) {
      this.audio.play();
      this.music = true;
    } else {
      this.audio.pause();
      this.music = false;
    }
  }
}
