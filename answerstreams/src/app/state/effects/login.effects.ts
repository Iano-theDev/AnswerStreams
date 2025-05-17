import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { catchError, tap, map, mergeMap, of } from "rxjs";
import { LoginService } from "src/app/core/services/login.service";
import * as loginActions from "src/app/state/actions/login.actions"




@Injectable()
export class LoggedInUserEffects {
    constructor(private actions$: Actions, private loginService: LoginService, public messageService: MessageService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginActions.login),
            mergeMap((action) =>
                this.loginService.login(action.user).pipe(
                    tap((user) => {
                        console.log("Login action recieved by effect +> :  ", user);
                        localStorage.setItem("token", user.token)
                        this.messageService.add({ severity: 'success', summary: 'Login Successful', detail: `Welcome ${user.name}` })

                    }),
                    map((user) => loginActions.loginSuccess({ user })),
                    catchError((error) => {
                        this.messageService.add({ severity: 'error', summary: 'Login Error', detail: error.message ? error.message : "Error logging in" })
                        return of(loginActions.loginError({ error }))
                    })
                ))
        ))
}
