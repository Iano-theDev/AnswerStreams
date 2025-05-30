import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as QuestionActions from 'src/app/state/actions/questions.actions'
import * as AnswerActions from 'src/app/state/actions/answer.actions'
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterOutlet, ToastModule]
})
export class AppComponent implements OnInit {
  constructor(private store:Store){}
  
  ngOnInit(): void {

    this.store.dispatch(QuestionActions.loadQuestions())
    this.store.dispatch(AnswerActions.loadAnswers())
  }
  title = 'answerstreams';
}
