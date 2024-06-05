import { Component } from '@angular/core';

@Component({
  selector: 'app-music-button',
  templateUrl: './music-button.component.html',
  styleUrls: ['./music-button.component.scss']
})
export class MusicButtonComponent {
  readonly audio: HTMLAudioElement = new Audio('assets/sounds/perfect-instrumental-ed-sheeran.mp3');
  playMusic = false;

  click() {
    this.playMusic = !this.playMusic;
    this.toggleMusic();
  }

  toggleMusic() {
    if (this.playMusic) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }
}
