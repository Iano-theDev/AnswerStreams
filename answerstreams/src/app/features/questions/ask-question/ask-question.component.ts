import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { FormsModule, NgForm } from '@angular/forms';
import { QuestionService } from 'src/app/core/services/questions.service';
import { Router } from '@angular/router';
import * as QuestionsActions from 'src/app/state/actions/questions.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectLoggedInUser } from 'src/app/state/selectors/login.selectors';
import { User } from 'src/app/shared/models/user.model';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

@Component({
    selector: 'app-ask-question',
    standalone: true,
    templateUrl: './ask-question.component.html',
    styleUrls: ['./ask-question.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule]
})
export class AskQuestionComponent implements OnInit{

    // user?: User
    constructor(private router: Router, private questionService: QuestionService, private store: Store<AppState>) { }



    ngOnInit(): void {

      const user = this.store.select(selectLoggedInUser).subscribe((user: any) => {
        console.log(user?.user[0].userId)
      })

        // this.store.select(selectLoggedInUser).subscribe(user => {
        //   this.user = user as unknown as User
        //   console.log(user?.userId);
        //   (error: any) => {
        //       console.log(error);
        //     }
        //   console.log('console works')
        // });
    }



    onSubmit(form: NgForm){
        console.log(form.value);


        this.store.dispatch(QuestionsActions.addQuestion({
           ...form.value
          }));

          this.router.navigate(["/questions"]);
        
    }

}
