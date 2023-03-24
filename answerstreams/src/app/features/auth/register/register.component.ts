import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectRegisterUserStateloading } from 'src/app/state/selectors/register.selectors';
import * as registerActions from 'src/app/state/actions/register.actions'
import { selectLoggedInUser } from 'src/app/state/selectors/login.selectors';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule, FormsModule]
})
export class RegisterComponent implements OnInit {

    isLoading = true;

    constructor(private store: Store<AppState>, private router: Router) { }

    ngOnInit(): void {
        this.store.select(selectRegisterUserStateloading).subscribe((loading) => {
            this.isLoading = loading;
        });
    }



    onSubmit(form: NgForm) {
        if (form && form.invalid) {
            return
        } else {
            // console.log(form.value);
            this.store.dispatch(registerActions.register({ user: form.value }))

            this.store.select(selectRegisterUserStateloading).subscribe((loading) => {
              this.isLoading = loading;
            });
        }

        this.store.select(selectLoggedInUser).subscribe((user: any) => {
            if (!user) {
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(async () => {
                    await(this.router.navigate(["/login"]));
                }
                );
          }
      
        })
    }
}
