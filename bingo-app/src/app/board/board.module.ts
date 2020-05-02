import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [BoardComponent],
})
export class BoardModule {}
