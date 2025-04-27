import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { reducers, metaReducers } from './store/reducers';
// import { effects } from './store/effects';
import { questionReducer } from './state/reducers/questions.reducers';
import { answerReducer } from './state/reducers/answer.reducers';
import { loggedInUserReducer } from './state/reducers/login.reducers';
import { registerUserReducer } from './state/reducers/register.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({
        questions: questionReducer,
        answers: answerReducer,
        loggedInUser: loggedInUserReducer,
        registerUser: registerUserReducer
      })
  ]
};