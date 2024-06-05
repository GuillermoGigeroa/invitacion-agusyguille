import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlowersComponent } from 'src/app/components/flowers/flowers.component';
import { NextButtonComponent } from 'src/app/components/next-button/next-button.component';
import { MusicButtonComponent } from 'src/app/components/music-button/music-button.component';

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
    NextButtonComponent,
    MusicButtonComponent,
  ],
  exports: [
    LandingComponent,
    FlowersComponent,
    NextButtonComponent,
    MusicButtonComponent,
  ]
})
export class LandingModule { }
