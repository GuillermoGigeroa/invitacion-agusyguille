import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  isMobile(): boolean {
    const userAgent = window.navigator.userAgent;
    return userAgent.toLowerCase().includes('mobile');
  }

  sleep (s: number) {
    return new Promise((r) => setTimeout(r, s*1000));
  }

}
