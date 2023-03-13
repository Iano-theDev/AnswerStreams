import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { AppSate } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/shared/models/question.model';
import { QuestionService } from '../questions.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-questions',
    standalone: true,
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule]
})
export class QuestionsComponent implements OnInit{
    // questions$!: Observable<Question[]>;
    questions$?: Observable<Question[]>;

    constructor(private questionService:QuestionService, private store: Store<AppSate>){}

    ngOnInit(): void {
        this.questions$ = this.store.select(state => state.questions);
        console.log(this.questions$)
      }

    
    getQuestions(){
       const myQuestion = this.questionService.getQuestions()
        console.log(myQuestion)
    }
}
