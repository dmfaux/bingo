import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { StartGameComponent } from './start-game/start-game.component';
import { GameComponent } from './game/game.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  {
    component: StartGameComponent,
    path: '',
  },
  {
    component: GameComponent,
    path: 'game/:id',
  },
  {
    component: BoardComponent,
    path: 'board/:id',
  },
  {
    component: JoinComponent,
    path: 'join/:code',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
