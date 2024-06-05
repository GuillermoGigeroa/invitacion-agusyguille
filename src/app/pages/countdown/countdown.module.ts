import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownRoutingModule } from './countdown-routing.module';
import { CountdownComponent } from './countdown.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CountdownRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    CountdownComponent,
  ],
  exports: [
    CountdownComponent,
  ]
})
export class CountdownModule { }
