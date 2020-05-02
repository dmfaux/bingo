import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class BingoService {
  public board = new Subject();
  private api = 'http://localhost:3001';
  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  public getGameById(id) {
    return this.http.get(`${this.api}/game/${id}`);
  }

  public getGameByCode(code) {
    return this.http.get(`${this.api}/join/${code}`);
  }

  public createNewGame(game) {
    return this.http.post(`${this.api}/game`, game).pipe(
      map((res) => res),
      catchError((e) => {
        console.error(e);
        this.snack.open(e.error, 'OK', {
          duration: 5000,
        });
        return of(null);
      })
    );
  }

  public joinGame(code, data) {
    return this.http.post(`${this.api}/join/${code}`, data);
  }

  public setGameBoard(board) {
    this.board.next(board);
    localStorage.setItem('currentGame', board.id);
    localStorage.setItem('selectedName', board.name);
  }

  public getBoardById(id) {
    return this.http.get(`${this.api}/board/${id}`);
  }

  public updateBoard(participant) {
    return this.http.patch(`${this.api}/board/${participant.id}`, participant);
  }
}
