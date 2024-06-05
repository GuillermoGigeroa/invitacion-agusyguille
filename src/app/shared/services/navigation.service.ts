import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Pages } from '../model/pages.enum';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  constructor(private router: Router) {}

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  reloadPage() {
    window.location.href = `?_reload`;
  }

}
