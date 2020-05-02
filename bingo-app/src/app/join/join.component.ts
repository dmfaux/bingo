import { Component, OnInit } from '@angular/core';
import { BingoService } from '../bingo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  public game = null;
  public joinForm: FormGroup;

  constructor(
    private bingo: BingoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    this.setGame(code);
    this.generateForm();
  }

  public join() {
    const data = {
      code: this.game.code,
      name: this.joinForm.value.name,
    };
    this.bingo.joinGame(this.game.code, data).subscribe((res: any) => {
      this.bingo.setGameBoard(res);
      this.router.navigate(['/board', res.id]);
    });
  }

  private generateForm() {
    const name = localStorage.getItem('selectedName');
    this.joinForm = this.fb.group({
      name: [name ? name : '', Validators.required],
    });
  }

  private setGame(code) {
    this.bingo.getGameByCode(code).subscribe((res) => {
      this.game = res;
    });
  }
}
