import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import Aura from '@primeng/themes/aura';

// import { reducers, metaReducers } from './store/reducers';
// import { effects } from './store/effects';
import { questionReducer } from './state/reducers/questions.reducers';
import { answerReducer } from './state/reducers/answer.reducers';
import { loggedInUserReducer } from './state/reducers/login.reducers';
import { registerUserReducer } from './state/reducers/register.reducers';
import { AnswerEffects } from './state/effects/answers.effects';
import { LoggedInUserEffects } from './state/effects/login.effects';
import { QuestionEffects } from './state/effects/questions.effects';
import { RegisterUserEffects } from './state/effects/register.effects';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore({
        questions: questionReducer,
        answers: answerReducer,
        loggedInUser: loggedInUserReducer,
        registerUser: registerUserReducer
      }),
      provideEffects([QuestionEffects, AnswerEffects, LoggedInUserEffects, RegisterUserEffects]),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        connectInZone: true
      }),
      provideAnimationsAsync(),
      providePrimeNG({
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: false
            }
        }
    }),
    MessageService
  ]
};