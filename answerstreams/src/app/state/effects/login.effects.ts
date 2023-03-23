import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, tap, map, mergeMap } from "rxjs";
import { LoginService } from "src/app/core/services/login.service";
import * as loginActions from "src/app/state/actions/login.actions"




@Injectable()
export class LoggedInUserEffects {
    constructor(private actions$: Actions, private loginService: LoginService) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginActions.login),
            mergeMap((action) =>
                this.loginService.login(action.user).pipe(
                    tap((user) => {
                        console.log("UserService:", user);
                        localStorage.setItem("token", user.token)
                    }),
                    map((user) => loginActions.loginSuccess({ user })),
                    catchError(async (error) => loginActions.loginError({ error }))
                ))
        ))
}
