import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowtoRoutingModule } from './howto-routing.module';
import { HowtoComponent } from './howto.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    HowtoRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    HowtoComponent,
  ],
  exports: [
    HowtoComponent,
  ]
})
export class HowtoModule { }
