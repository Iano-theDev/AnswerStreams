import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { selectLoggedInUser } from 'src/app/state/selectors/login.selectors';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/core/services/questions.service';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { Question } from 'src/app/shared/models/question.model';
import { Answer } from 'src/app/shared/models/answer.model';
import { selectAnswers } from 'src/app/state/selectors/answer.selectors';

@Component({
    selector: 'app-user-profile',
    imports: [CommonModule, HeaderComponent],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  question: Question | undefined

  answers: Answer[] = []

  constructor(private router: Router, private questionService: QuestionService, private store: Store<AppState>, private route: ActivatedRoute) { }

   user = this.store.select(selectLoggedInUser).subscribe((user: any) => {
    console.log(user?.user[0].userId)
  })

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
  

}
