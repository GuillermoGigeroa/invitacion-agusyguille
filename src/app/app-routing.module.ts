import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pages } from './shared/model/pages.enum';

const routes: Routes = [{
  path: Pages.HOME, loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
