import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { QuestionsComponent } from '../questions/questions.component';
import { Question } from 'src/app/shared/models/question.model';
import { Store } from '@ngrx/store';
import * as QuestionActions from 'src/app/state/actions/questions.actions'
import * as AnswerActions from 'src/app/state/actions/answer.actions'
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import { AppState } from 'src/app/state/app.state';
import { QuestionService } from 'src/app/core/services/questions.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Answer } from 'src/app/shared/models/answer.model';
import { selectAnswers } from 'src/app/state/selectors/answer.selectors';


@Component({
    selector: 'app-single-question',
    templateUrl: './single-question.component.html',
    styleUrls: ['./single-question.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule]
})
export class SingleQuestionComponent implements OnInit {
  showInput?: boolean;
  // faThumbsDown = faThumbsDown;
  // faThumbsUp = faThumbsUp;

  question: Question | undefined

  answers: Answer[] = []

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.store.select('questions').subscribe(questions => {
      this.question = questions.questions.find((question: Question) => question.questionId === params['id'])
      console.log("question", this.question);
      },
        (error: any) => {
          console.log(error);
        }
      );
      console.log('console works')
    });

    this.route.params.subscribe(params => {
      this.store.select(selectAnswers).subscribe(answers => {
        this.answers = answers.filter((answer: Answer) => answer.questionId === params['id'])
        console.log("Answers:", this.answers)
      })
    })
    
    

  }
  addAnswer() {
    
  }
}

