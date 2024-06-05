import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownRoutingModule } from './countdown-routing.module';
import { CountdownComponent } from './countdown.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountdownShowComponent } from 'src/app/components/countdown-show/countdown-show.component';

@NgModule({
  imports: [
    CountdownRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    CountdownComponent,
    CountdownShowComponent,
  ],
  exports: [
    CountdownComponent,
    CountdownShowComponent,
  ]
})
export class CountdownModule { }
