import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowtoComponent } from './howto.component';
import { Pages } from 'src/app/shared/model/pages.enum';

const routes: Routes = [{ path: Pages.DEFAULT, component: HowtoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowtoRoutingModule { }
