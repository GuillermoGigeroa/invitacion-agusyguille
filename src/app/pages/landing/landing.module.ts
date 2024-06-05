import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlowersComponent } from 'src/app/components/flowers/flowers.component';

@NgModule({
  imports: [
    LandingRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    LandingComponent,
    FlowersComponent,
  ],
  exports: [
    LandingComponent,
    FlowersComponent,
  ]
})
export class LandingModule { }
