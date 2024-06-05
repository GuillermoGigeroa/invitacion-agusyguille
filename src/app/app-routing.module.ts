import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './shared/model/pages.enum';

const routes: Routes = [
  { path: Pages.HOME, loadChildren: () => import('./pages/home/home.module').then(m => m.LandingModule) },
  { path: Pages.COUNTDOWN, loadChildren: () => import('./pages/countdown/countdown.module').then(m => m.CountdownModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
