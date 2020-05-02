import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rotate90 } from '2d-array-rotation';
import { BingoService } from '../bingo.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public board;
  private participant;

  constructor(private route: ActivatedRoute, private bingo: BingoService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bingo.getBoardById(id).subscribe((res: any) => {
      this.participant = res;
      this.board = res.board;
    });
  }

  public clicked(number) {
    if (number.digit > 0) {
      number.checked = !number.checked;
      this.participant = {
        ...this.participant,
        board: this.board,
      };
      this.bingo.updateBoard(this.participant).subscribe((res) => {
        this.checkIfBingo();
      });
    }
  }

  private checkIfBingo() {
    let board = [...this.board.map((col) => col.numbers)];
    let bingo = false;

    board.forEach((numbers) => {
      if (!bingo) {
        bingo = numbers.every((number) => {
          return number.checked;
        });
      }
    });

    if (!bingo) {
      board = rotate90(board);
      board.forEach((numbers) => {
        if (!bingo) {
          bingo = numbers.every((number) => {
            return number.checked;
          });
        }
      });
    }

    console.log(bingo);
  }
}
