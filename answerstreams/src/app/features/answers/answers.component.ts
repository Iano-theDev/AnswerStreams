import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Answer } from 'src/app/shared/models/answer.model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { selectAnswers } from 'src/app/state/selectors/answer.selectors';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit{
  answers: Answer[] = [];

  constructor(private store: Store<AppState>){ }

  ngOnInit(): void {
    this.store.select(selectAnswers).subscribe(answers => {
      this.answers = answers as Answer[];
      (error: any) => {
        console.log(error);
      }
    })
  }
}
