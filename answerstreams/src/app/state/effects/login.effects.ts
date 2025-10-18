import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { catchError, tap, map, mergeMap, of } from "rxjs";
import { LoginService } from "src/app/core/services/login.service";
import * as loginActions from "src/app/state/actions/login.actions"
import { jwtDecode } from "jwt-decode";
import { LoggedInUser } from "src/app/shared/models/loggedInUser.model";




@Injectable()
export class LoggedInUserEffects {
    constructor(private actions$: Actions, private loginService: LoginService, public messageService: MessageService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginActions.login),
            mergeMap((action) =>
                this.loginService.login(action.user).pipe(
                    tap((response) => {
                        console.log("Login action recieved by effect +> :  ", response);
                        const decodedUser: LoggedInUser = jwtDecode(response.token)
                        localStorage.setItem("token", response.token)
                        console.log("Decoded token is: ", decodedUser)
                        this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: `Welcome ${decodedUser.name}` })

                    }),
                    map((response) => {
                        const decodedUser: LoggedInUser = jwtDecode(response.token)
                        // const user: LoggedInUser = [...decodedUser]
                        return loginActions.loginSuccess({user: decodedUser})
                    }),
                    catchError((error) => {
                        this.messageService.add({ severity: 'error', summary: 'Login Error', detail: error.message ? error.message : "Error logging in" })
                        return of(loginActions.loginError({ error }))
                    })
                ))
        ))
}
