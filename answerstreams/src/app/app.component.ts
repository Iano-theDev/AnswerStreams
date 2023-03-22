import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as QuestionActions from 'src/app/state/actions/questions.actions'
import * as AnswerActions from 'src/app/state/actions/answer.actions'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store:Store){}
  
  ngOnInit(): void {

    this.store.dispatch(QuestionActions.loadQuestions())
    this.store.dispatch(AnswerActions.loadAnswers())
  }
  title = 'answerstreams';
}
