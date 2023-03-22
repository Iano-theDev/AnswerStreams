import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

import * as QuestionsActions from "../actions/questions.actions";
import { of } from "rxjs";
import { QuestionService } from "src/app/core/services/questions.service";

@Injectable()
export class QuestionEffects {

    constructor(
        private actions$: Actions,
        private questionService: QuestionService
    ) { }

    loadQuestions$ = createEffect(() => this.actions$.pipe(
        ofType(QuestionsActions.loadQuestions),
        mergeMap(() => this.questionService.getQuestions().pipe(
            map(questions => QuestionsActions.loadQuestionsSuccess({ questions })),
            catchError(error => of(QuestionsActions.loadQuestionsFailure({ error })))
        )),
    ));
    
}
