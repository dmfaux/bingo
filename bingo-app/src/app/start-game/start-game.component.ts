import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BingoService } from '../bingo.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss'],
})
export class StartGameComponent implements OnInit {
  public bingoForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bingo: BingoService
  ) {}

  ngOnInit(): void {}

  public start() {
    // Post to API, generate room and return code
    // Navigate to code
    this.bingo.createNewGame(this.bingoForm.value).subscribe((res) => {
      if (res && res.id) this.router.navigate(['/game', res.id]);
    });
  }
}
