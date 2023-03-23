import { createAction, props} from '@ngrx/store'
import { Question } from 'src/app/shared/models/question.model';


export const loadQuestions = createAction('[Questions] Load Questions');

export const loadQuestionsSuccess = createAction(
    '[Questions] Load Questions Success',
     props<{ questions: Question[] }>()
);

export const loadQuestionsFailure = createAction(
    '[Question] Load Questions Failure',
    props<{ error: any }>()
)

export const addQuestion = createAction(
    '[Questions] Add Question',
    (question: Question) => ({ question })
);


export const addQuestionSuccess = createAction(
    '[Questions] Add Question Success',
    (question: Question) => ({ question })
);

export const addQuestionFailure = createAction(
    '[Questions] Add Question Failure',
    (error: any) => ({ error })
);