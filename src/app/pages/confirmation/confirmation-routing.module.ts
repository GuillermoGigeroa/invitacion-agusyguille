import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation.component';
import { Pages } from 'src/app/shared/model/pages.enum';

const routes: Routes = [{ path: Pages.DEFAULT, component: ConfirmationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmationRoutingModule { }
