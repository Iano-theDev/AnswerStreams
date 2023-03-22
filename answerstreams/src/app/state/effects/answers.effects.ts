import { Actions, ofType, createEffect} from '@ngrx/effects'
import { map, mergeMap, catchError } from "rxjs/operators"
import { Injectable } from "@angular/core"
import * as AnswerActions from "../actions/answer.actions"
import { of} from "rxjs"
import { AnswerService } from 'src/app/core/services/answer.service'

@Injectable()
export class AnswerEffects {
    constructor(
        private actions$: Actions,
        private answerService: AnswerService
    ){}

    loadAnswers$ = createEffect(()=> this.actions$.pipe(
        ofType(AnswerActions.loadAnswers),
        mergeMap(() => this.answerService.getAnswers().pipe(
            map(answers => AnswerActions.loadAnswersSuccess({ answers })),
            catchError(error => of (AnswerActions.loadAnswersFailure({error})))
        )),
    ));
}
