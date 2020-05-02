import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public clicked = false;
  public shareUrl = '';
  public page = 'http://localhost:4200/join';

  constructor(private bingo: BingoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bingo
      .getGameById(id)
      .subscribe((res: { id: string; code: string }) => {
        this.shareUrl = `${this.page}/${res.code}`;
      });
  }

  public copied() {
    this.clicked = true;
    setTimeout(() => {
      this.clicked = false;
    }, 1000);
  }
}
