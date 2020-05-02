import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { BoardModule } from '../board/board.module';
import { StartGameModule } from '../start-game/start-game.module';
import { GameModule } from '../game/game.module';
import { JoinModule } from '../join/join.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    BoardModule,
    StartGameModule,
    GameModule,
    JoinModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
