import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { ConfirmationComponent } from './confirmation.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    ConfirmationRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    ConfirmationComponent,
  ],
  exports: [
    ConfirmationComponent,
  ],
})
export class ConfirmationModule { }
