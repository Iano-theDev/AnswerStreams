import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgForm, FormsModule } from '@angular/forms'
import { Router, RouterModule } from '@angular/router';
import { selectLoggedInUser, selectLoggedInUserError, selectLoggedInUserLoading } from 'src/app/state/selectors/login.selectors';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/core/services/login.service';
import { IsAuthenticatedService } from 'src/app/core/services/is-authenticated.service';
import { AppState } from 'src/app/state/app.state';
import * as loginActions from "src/app/state/actions/login.actions"
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'
import { ButtonModule } from 'primeng/button';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FooterComponent, HeaderComponent, FormsModule, RouterModule, ToastModule, ButtonModule],
  providers: [MessageService]
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: NgForm;
  email!: string;
  password!: string;
  isLoading: boolean = false;
  error: any = null;
  private destroy$ = new Subject<void>() 

  constructor(private router: Router, private store: Store<AppState>, private loginService: LoginService, private isAuthenticated: IsAuthenticatedService, private messageService: MessageService) { }

  ngOnInit(): void {

    this.store.select(selectLoggedInUserLoading).pipe(takeUntil(this.destroy$)).subscribe((loading) => {
      this.isLoading = loading;
    })

    // this.store.select(selectLoggedInUser).subscribe((user: any) => {
    //   if (user) {
    //     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //       this.router.navigate(["/questions"]);
    //     }
    //     );
    //   }
    // })

    this.store.select(selectLoggedInUser).pipe(takeUntil(this.destroy$)).subscribe((user: any) => {
      if (user) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(["/questions"]);
        }
        );
      }
    })

    this.store.select(selectLoggedInUserError).pipe(takeUntil(this.destroy$)).subscribe((error) => {
      this.error = error;
      console.log("Error logging in: ", error)
    })


  }

  onSubmit(form: NgForm) {
    if (form && form.invalid) {
      console.log(" Login form is invalid")
      return
    } else {
      console.log(form.value)
      this.store.dispatch(loginActions.login({ user: form.value }));
    }



  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // loginAttempted() {
  //   this.messageService.add({severity: 'info', summary: 'Login Tried', detail: "Logging you in ..."})
  //   console.log("Someone tried logging in")
  // }
}
