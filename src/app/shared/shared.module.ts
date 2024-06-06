import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { NextButtonComponent } from '../components/next-button/next-button.component';
import { MusicButtonComponent } from '../components/music-button/music-button.component';
import { BackButtonComponent } from '../components/back-button/back-button.component';
import { DragScreenComponent } from '../components/drag-screen/drag-screen.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedRoutingModule,
    ],
    declarations: [
        NextButtonComponent,
        BackButtonComponent,
        MusicButtonComponent,
        DragScreenComponent,
    ],
    exports: [
        NextButtonComponent,
        BackButtonComponent,
        MusicButtonComponent,
        DragScreenComponent,
    ]
})
export class SharedModule { }
