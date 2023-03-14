import { Injectable } from "@angular/core"
import { QuestionService } from "../../core/services/questions.service"
import { Actions, createEffect, ofType } from '@ngrx/effects'

// @Injectable()
// export const QuestionEffects {
//     cosntructor(
//         private actions$: Actions,
//         private questionsService: QuestionService
//     ){}
// }