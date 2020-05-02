import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { GameComponent } from './game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ClipboardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [GameComponent],
})
export class GameModule {}
