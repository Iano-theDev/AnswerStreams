import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { RegisterComponent } from "./features/auth/register/register.component";
import { LoginComponent } from "./features/auth/login/login.component";
import { QuestionsComponent } from "./features/questions/questions/questions.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AskQuestionComponent } from "./features/questions/ask-question/ask-question.component";

import { SingleQuestionComponent } from "./features/questions/single-question/single-question.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { questionReducer } from './state/reducers/questions.reducers';
import { QuestionEffects } from './state/effects/questions.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { answerReducer } from './state/reducers/answer.reducers';
import { AnswerEffects } from './state/effects/answers.effects';
import { loggedInUserReducer } from './state/reducers/login.reducers';
import { LoggedInUserEffects } from './state/effects/login.effects';
import { RegisterUserEffects } from './state/effects/register.effects';
import { registerUserReducer } from './state/reducers/register.reducers';
import { TokenInterceptorService } from './core/services/token-interceptor.service';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        HomepageComponent,
        RegisterComponent,
        LoginComponent,
        QuestionsComponent,
        StoreModule.forRoot({questions: questionReducer, answers: answerReducer, loggedInUser: loggedInUserReducer, registerUser: registerUserReducer }, {}),
        AskQuestionComponent,
        SingleQuestionComponent,
        FontAwesomeModule,
        EffectsModule.forRoot([QuestionEffects, AnswerEffects, LoggedInUserEffects, RegisterUserEffects]),
        AskQuestionComponent,
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() , connectInZone: true})
    ]
})
export class AppModule { }
