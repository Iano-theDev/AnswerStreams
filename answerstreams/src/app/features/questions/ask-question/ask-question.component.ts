import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { QuestionService } from 'src/app/core/services/questions.service';
import { Router, RouterModule } from '@angular/router';
import * as QuestionsActions from 'src/app/state/actions/questions.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectLoggedInUser } from 'src/app/state/selectors/login.selectors';
import { User } from 'src/app/shared/models/user.model';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext'
import { TextareaModule } from 'primeng/textarea'
import { FloatLabelModule } from 'primeng/floatlabel'
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    FloatLabelModule,
    ReactiveFormsModule
  ]
})
export class AskQuestionComponent implements OnInit {
  questionForm: FormGroup;

  // user?: User
  constructor(private router: Router, private questionService: QuestionService, private store: Store<AppState>, private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.questionForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }



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



  onSubmit() {
    if (this.questionForm.valid) {
      // console.log(form.value);
      console.log(this.questionForm.value);



      this.store.dispatch(QuestionsActions.addQuestion({
        ...this.questionForm.value
      }));
    }

    this.ref.close()
  }

}
