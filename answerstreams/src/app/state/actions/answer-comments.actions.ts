import {  createAction, props } from '@ngrx/store'
import { Comment } from 'src/app/shared/models/comment.model'

export const loadAnswerComments = createAction('[Comment] Load Comment');

export const loadAnswersCommentsSuccess = createAction(
    '[Comment] LoadComments Success',
    props<{comment: Comment[]}>()
);

export const loadAnswersCommentsFailure = createAction(
    '[Comment] LoadComments Failure',
    props<{error: any}>()
);