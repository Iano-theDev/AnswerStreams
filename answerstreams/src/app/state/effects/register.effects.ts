import { Actions, createEffect, ofType } from "@ngrx/effects"
import { map, mergeMap, catchError } from "rxjs/operators"
import { Injectable } from "@angular/core"
import { RegisterService } from "src/app/core/services/register.service"
import * as registerActions from "../actions/register.actions"


@Injectable()
export class RegisterUserEffects {
    constructor(private actions$: Actions, private registerService: RegisterService) {}

    registerUser$ = createEffect(() =>
    this.actions$.pipe(
        ofType(registerActions.register),
        mergeMap((action) => 
        this.registerService.registerUser(action.user).pipe(
            map((user) => registerActions.registerSuccess({ user })),
            catchError(async (error) => registerActions.registerError({ error }))
        ))
    )
    )
}