import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Question } from 'src/app/shared/models/question.model';
import { QuestionService } from '../../../core/services/questions.service';
import { Router, RouterModule } from '@angular/router';
import { selectQuestions } from 'src/app/state/selectors/questions.selectors';
import * as QuestionActions from 'src/app/state/actions/questions.actions'
import { DataView } from 'primeng/dataview'
import { DataViewModule } from 'primeng/dataview'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SpeedDial } from 'primeng/speeddial';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.component.css'],
    standalone: true,
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule, DataView, CardModule, ButtonModule, AvatarModule, SpeedDial]
})
export class QuestionsComponent implements OnInit{
    questions: Question[] = [];
    speedDialAction: any;

    constructor(private store: Store<AppState>, private questionService: QuestionService, public router: Router) {  
    }
  
    ngOnInit(): void {
      this.speedDialAction = [{
        icon: 'pi pi-plus',
        command: () => this.routeToAskPage()
      }]

      this.store.select(selectQuestions).subscribe(questions => {
        this.questions = questions as Question[];
        console.log(this.questions);
        (error: any) => {
            console.log(error);
          }
        console.log('console works')
      });
      this.store.dispatch(QuestionActions.loadQuestions())

    // **********************************************
    // this.questionService.getQuestions().subscribe(
    //     (questions: Question[]) => {
    //       this.questions = questions;
    //       (error:any) => {
    //         console.log(error);
    //       }
    //       console.log('got It')
    //       console.log(this.questions);
    //     },
    // )
}

routeToAskPage() {
  this.router.navigate(['/ask'])
}
}
