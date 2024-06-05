import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './countdown.component';
import { Pages } from 'src/app/shared/model/pages.enum';

const routes: Routes = [{ path: Pages.DEFAULT, component: CountdownComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountdownRoutingModule { }
