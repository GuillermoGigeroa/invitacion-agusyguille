import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowtoRoutingModule } from './howto-routing.module';
import { HowtoComponent } from './howto.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsComponent } from 'src/app/components/google-maps/google-maps.component';
import { SafePipe } from 'src/app/components/google-maps/safe.pipe';

@NgModule({
  imports: [
    HowtoRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    HowtoComponent,
    GoogleMapsComponent,
    SafePipe,
    ],
  exports: [
    HowtoComponent,
    GoogleMapsComponent,
    SafePipe,
  ]
})
export class HowtoModule { }
