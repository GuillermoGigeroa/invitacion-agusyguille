import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlowersComponent } from 'src/app/components/flowers/flowers.component';
import { MusicButtonComponent } from 'src/app/components/music-button/music-button.component';

@NgModule({
  imports: [
    LandingRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    FlowersComponent,
  ],
  exports: [
    HomeComponent,
    FlowersComponent,
  ]
})
export class LandingModule { }
